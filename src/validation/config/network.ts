import { IsBoolean, IsEnum, Length } from "class-validator";

import { Protobuf } from "@meshtastic/meshtasticjs";

export class NetworkValidation implements Protobuf.Config_NetworkConfig {
  @IsBoolean()
  wifiEnabled: boolean;

  @IsEnum(Protobuf.Config_NetworkConfig_WiFiMode)
  wifiMode: Protobuf.Config_NetworkConfig_WiFiMode;

  @Length(1, 33)
  wifiSsid: string;

  @Length(8, 64)
  wifiPsk: string;

  @Length(2, 30)
  ntpServer: string;
}
