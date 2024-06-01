interface params {
  containerStyle?: string;
  imgStyle?: string;
  captionStyle?: string;
  textCaption?: string;
  src?: any;
}

export const HomeItem = ({
  containerStyle,
  imgStyle,
  captionStyle,
  textCaption,
  src,
}: params) => {
  return (
    <div className={containerStyle}>
      <div className={"relative " + containerStyle}>
        <img src={src} className={imgStyle + " absolute"} />
        <div className={"absolute " + captionStyle}>{textCaption}</div>
      </div>
    </div>
  );
};
