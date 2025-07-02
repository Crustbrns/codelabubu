import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import "./App.css";
import Labubupicker from "./components/labubupicker";
import { IoGift, IoArrowRedo, IoCheckmarkCircleSharp } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  // const handleClick = () => {
  //   WebApp.sendData("hello sn0weagle data sent");
  //   WebApp.close();
  // };

  return (
    <div className="app p-8" style={{ backgroundColor: "rgba(33,28,32,255)" }}>
      <div className=" text-2xl font-bold text-white">Забери свою <span className="font-extrabold [text-shadow:_0px_0px_16px_#388bf0]" style={{color:'rgba(56,139,240,255)'}}>ЛАБУБУ</span></div>
      <div className="text-white">В честь открытия нашего магазина.</div>
      <div className="flex gap-5 mt-4">
        <div
          className="flex gap-0 flex-col w-full rounded-xl p-2 text-white items-center justify-center"
          style={{ backgroundColor: "#37243A" }}
        >
          <div className="font-bold text-xl flex gap-1 justify-center items-center">
            <IoGift color="rgba(56,139,240,255)" />
            246
          </div>
          <div style={{color: 'rgba(138,136,141,255)'}}>в наличии</div>
        </div>
        <div
          className="flex gap-0 flex-col w-full rounded-xl p-2 text-white items-center justify-center"
          style={{ backgroundColor: "#21233D" }}
        >
          <div className="font-bold text-xl flex gap-1 justify-center items-center">
            <IoArrowRedo color="rgba(56,139,240,255)" />
            54
          </div>
          <div style={{color: 'rgba(138,136,141,255)'}}>отправлено</div>
        </div>
      </div>
      <div className="mt-6">
        <div
          className="flex gap-0 flex-col w-full rounded-xl p-3 text-white items-center justify-center"
          style={{ backgroundColor: "#291E37" }}
        >
          <div ><span className=" text-xm opacity-45">Благодаря нашим спонсорам мы собрали партию лабубу для наших подписчиков. Успей получить одну из представленных лабубу!</span></div>
        </div>
      </div>
      {/* <p>user: {WebApp.initDataUnsafe.user?.first_name}</p> */}
      <Labubupicker />
      <div className="mt-6 text-white flex flex-col items-start gap-2">
          <div className="ml-4">Условия получения</div>
        <div
          className="flex gap-0 flex-col w-full rounded-xl p-3 text-white items-center justify-center"
          style={{backgroundColor: "rgb(55, 36, 58)"}}
        >
          <div className="flex items-center justify-center gap-4">
              <div className="p-3 rounded-full flex" style={{backgroundColor: '#5FC6FF'}}><HiOutlineSpeakerphone size={22}/></div>
              <div className="flex flex-col items-start text-start gap-1">
                <div className="text-xl">Подписаться</div>
                <div className="opacity-50 text-sm/4.5">Подпишитесь на необходимые каналы или группы спонсоров</div>
              </div>
              <div className=" bg-white p-0 rounded-full"><IoCheckmarkCircleSharp size={26} transform="scale(1.3)" color="#30D259"/></div>
          </div>
        </div>
      </div>
      {/* <button onClick={handleClick}>send and close</button> */}
    </div>
  );
}

export default App;
