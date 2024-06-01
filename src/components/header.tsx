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
    <div className="w-full px-[285px] py-[38px] mb-[20px] shadow-lg">
      <div className="h-[90px] w-[260px] pl-[16px] mb-[20px]">
        <img src={logo} />
      </div>
      <div>
        {data.map((item, index) => (
          <div
            className="inline font-arial text-xl leading-5 text-left uppercase px-3 mt-20"
            key={index}
          >
            {item?.name || item?.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
