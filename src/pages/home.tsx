import { HomeItem } from "../components/homeItem";

export const Home = () => {
  return (
    <div className="px-[239px] pt-[60px]">
      <div className="flex">
        <HomeItem
          containerStyle="w-[494px] h-[330px] bg-slate-500"
          imgStyle="w-[494px] h-[330px]"
          captionStyle="w-full h-[90px] bg-black opacity-80 bottom-0 text-white text-[19.6px] px-[10px]"
          textCaption="Hiệu ứng Dunning-Kruger và sự mù quáng của người kém năng lực"
          src="https://static.tramdoc.vn/image/img.news/0/0/0/13207.jpg?v=1&w=480&h=295&nocache=1"
        />
        <div className="grid grid-cols-2">
          <HomeItem
            containerStyle="w-[232px] h-[160px] px-1"
            imgStyle="w-[232px] h-[160px]"
            captionStyle="w-full h-[75px] bg-black opacity-80 bottom-0 text-white text-[16px] px-[5px] leading-[20px] "
            textCaption="Cuốn sách giúp ba mẹ bảo vệ mắt con trong thời đại siêu cận thị đúng cách"
            src="https://static.tramdoc.vn/image/img.news/0/0/0/13235.jpg?v=1&w=480&h=295&nocache=1"
          />
          <HomeItem
            containerStyle="w-[232px] h-[160px] px-2"
            imgStyle="w-[232px] h-[160px]"
            captionStyle="w-full h-[75px] bg-black opacity-80 bottom-0 text-white text-[16px] px-[5px] leading-[20px] "
            textCaption="“1000 bộ não: Lý thuyết mới về trí tuệ con người” có gì mà được Bill Gates khuyên đọc?"
            src="https://static.tramdoc.vn/image/img.news/0/0/0/13236.jpg?v=1&w=480&h=295&nocache=1"
          />
          <HomeItem
            containerStyle="w-[232px] h-[160px] px-1 pt-[3px]"
            imgStyle="w-[232px] h-[160px]"
            captionStyle="w-full h-[50px] bg-black opacity-80 -bottom-1 text-white text-[16px] px-[5px] leading-[20px] "
            textCaption="10 điều đúc rút về kiến thức kinh doanh thực tiễn"
            src="https://static.tramdoc.vn/image/img.news/0/0/0/13237.jpg?v=1&w=480&h=295&nocache=1"
          />
          <HomeItem
            containerStyle="w-[232px] h-[160px] px-2 pt-[3px]"
            imgStyle="w-[232px] h-[160px]"
            captionStyle="w-full h-[50px] bg-black opacity-80 -bottom-1 text-white text-[16px] px-[5px] leading-[20px] "
            textCaption="5 cuốn sách được nhiều doanh nhân thành đạt khuyến đọc"
            src="https://static.tramdoc.vn/image/img.news/0/0/0/13238.jpg?v=1&w=480&h=295&nocache=1"
          />
        </div>
      </div>
    </div>
  );
};
