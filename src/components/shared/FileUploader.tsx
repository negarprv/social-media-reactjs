import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".svg"],
    },
  });

  return (
    <div
      className=" flex flex-center flex-col bg-dark-3 rounded-xl "
      {...getRootProps()}
    >
      <input className=" cursor-pointer" {...getInputProps()} />
      {fileUrl ? (
        <>
          <div className=" flex flex-1 justify-center p-5 w-full lg:p-10">
            <img src={fileUrl} alt="image" className="file_uploader-img" />
          </div>
          <p className=" file_uploader-label">
            Click or drag photo to replace{" "}
          </p>
        </>
      ) : (
        <div className=" file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="file-upload"
          />
          <h3 className=" text-light-2 mb-2 mt-6 base-medium">
            Drag photo here
          </h3>
          <p className=" text-light-4 mb-6 small-regular">SVG, PNG, JPG</p>

          <Button className="shad-button_dark_4">Select from computer</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
