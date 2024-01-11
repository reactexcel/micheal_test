interface propAvatar {
  width?: string;
  height?: string;
  src: string;
  className?: string;
}

export default function Avtar({ width, height, src, className }: propAvatar) {
  return (
    <>
      <img
        src={src}
        alt="icon"
        width={width}
        height={height}
        className={className}
      />
    </>
  );
}
