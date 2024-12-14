import Settings from "@/components/Settings";
import SettingsChanger from "@/components/SettingsChanger";
import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Timer />
      <Settings />
      <SettingsChanger />
    </div>
  );
}
