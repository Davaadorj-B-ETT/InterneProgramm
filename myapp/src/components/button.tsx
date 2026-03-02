type ButtonProps = {
  text: string;
  width?: number;
  height?: number;
};

export function CustomButton({ text, height, width }: ButtonProps) {
    const style = {
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
    }

    return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded"
      style = {style}>{text}
    </button>
  );
}