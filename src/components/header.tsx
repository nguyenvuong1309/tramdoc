import logo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
const data = [
  { icon: <HomeIcon /> },
  { name: "THƯ VIỆN" },
  { name: "ĐIỂM SÁCH" },
  { name: "TUYỂN TẬP" },
  { name: "PHONG CÁCH ĐỌC" },
  { name: "NGƯỜI THÀNH CÔNG ĐỌC GÌ" },
  { name: "TỪ SÁCH ĐẾN ĐỜI" },
  { name: "SỰ KIỆN" },
  { icon: <FacebookIcon /> },
];
export const Header = () => {
  return (
    <div className="w-full px-[239px] pt-[30px] pb-[10px] shadow-lg">
      <div className="h-[61px] w-[197px] mb-[25px]">
        <img src={logo} />
      </div>
      <div>
        {data.map((item, index) => (
          <div
            className="inline font-arial text-[14px] leading-5 text-left uppercase px-3 font-[500]"
            key={index}
          >
            {item?.name || item?.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
