// discord_common/js/shared/constants/web/AvatarConstants.tsx
import size_mod from "../../../../../_runtime/metro/00002__.js";

let DEPRECATED_SIZE_100;
let DEPRECATED_SIZE_30;
let DEPRECATED_SIZE_60;
let SIZE_120;
let SIZE_152;
let SIZE_16;
let SIZE_20;
let SIZE_24;
let SIZE_32;
let SIZE_40;
let SIZE_44;
let SIZE_48;
let SIZE_56;
let SIZE_72;
let SIZE_80;
let SIZE_96;
const obj = {
  SIZE_16: "SIZE_16",
  SIZE_20: "SIZE_20",
  SIZE_24: "SIZE_24",
  SIZE_32: "SIZE_32",
  SIZE_40: "SIZE_40",
  SIZE_44: "SIZE_44",
  SIZE_48: "SIZE_48",
  SIZE_56: "SIZE_56",
  SIZE_72: "SIZE_72",
  SIZE_80: "SIZE_80",
  SIZE_96: "SIZE_96",
  SIZE_120: "SIZE_120",
  SIZE_152: "SIZE_152",
  DEPRECATED_SIZE_30: "DEPRECATED_SIZE_30",
  DEPRECATED_SIZE_60: "DEPRECATED_SIZE_60",
  DEPRECATED_SIZE_100: "DEPRECATED_SIZE_100",
};
const obj2 = {
  [SIZE_16]: Object.freeze({ size: 16, status: 6, stroke: 2, offset: 0 }),
  [SIZE_20]: Object.freeze({ size: 20, status: 6, stroke: 2, offset: 0 }),
  [SIZE_24]: Object.freeze({ size: 24, status: 8, stroke: 3, offset: 0 }),
  [SIZE_32]: Object.freeze({ size: 32, status: 10, stroke: 3, offset: 0 }),
  [SIZE_40]: Object.freeze({ size: 40, status: 12, stroke: 4, offset: 0 }),
  [SIZE_44]: Object.freeze({ size: 44, status: 12, stroke: 4, offset: 0 }),
  [SIZE_48]: Object.freeze({ size: 48, status: 12, stroke: 4, offset: 0 }),
  [SIZE_56]: Object.freeze({ size: 56, status: 14, stroke: 4, offset: 2 }),
  [SIZE_72]: Object.freeze({ size: 72, status: 16, stroke: 6, offset: 4 }),
  [SIZE_80]: Object.freeze({ size: 80, status: 16, stroke: 6, offset: 4 }),
  [SIZE_96]: Object.freeze({ size: 96, status: 20, stroke: 8, offset: 6 }),
  [SIZE_120]: Object.freeze({ size: 120, status: 24, stroke: 8, offset: 8 }),
  [SIZE_152]: Object.freeze({ size: 152, status: 30, stroke: 10, offset: 10 }),
  [DEPRECATED_SIZE_30]: Object.freeze({ size: 30, status: 0, stroke: 0, offset: 0 }),
  [DEPRECATED_SIZE_60]: Object.freeze({ size: 60, status: 0, stroke: 0, offset: 0 }),
  [DEPRECATED_SIZE_100]: Object.freeze({ size: 100, status: 0, stroke: 0, offset: 0 }),
};
SIZE_16 = obj.SIZE_16;
SIZE_20 = obj.SIZE_20;
SIZE_24 = obj.SIZE_24;
SIZE_32 = obj.SIZE_32;
SIZE_40 = obj.SIZE_40;
SIZE_44 = obj.SIZE_44;
SIZE_48 = obj.SIZE_48;
SIZE_56 = obj.SIZE_56;
SIZE_72 = obj.SIZE_72;
SIZE_80 = obj.SIZE_80;
SIZE_96 = obj.SIZE_96;
SIZE_120 = obj.SIZE_120;
SIZE_152 = obj.SIZE_152;
DEPRECATED_SIZE_30 = obj.DEPRECATED_SIZE_30;
DEPRECATED_SIZE_60 = obj.DEPRECATED_SIZE_60;
DEPRECATED_SIZE_100 = obj.DEPRECATED_SIZE_100;
const frozen = Object.freeze(obj2);
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/shared/constants/web/AvatarConstants.tsx");

export const MOBILE_HEIGHT_RATIO = 1.5;
export const TYPING_WIDTH_RATIO = 2.5;
export const MOBILE_ICON_RADIUS = 0.125;
export const CUTOUT_BORDER_RADIUS = 0.2;
export const VIDEO_RATIO = 1.78;
export const VR_STATUS_WIDTH_RATIO = 1.5;
export const VR_STATUS_SCALE = 1;
export const VR_CUTOUT_BORDER_RADIUS = 0.5;
export const AvatarSizes = obj;
export const StatusBackdropColors = { BLACK: "black", WHITE: "white" };
export const StatusBackdropOpacity = { HIGH: 0.7, [0.7]: "HIGH", LOW: 0.45, [0.45]: "LOW" };
export const AvatarSizeSpecs = frozen;
export const getAvatarSpecs = function getAvatarSpecs(arg0) {
  return frozen[arg0];
};
export const getAvatarSize = function getAvatarSize(num) {
  size = num;
  if (typeof num !== "number") {
    size = frozen[num].size;
  }
  return size;
};
export const getStatusSize = function getStatusSize(arg0) {
  return frozen[arg0].status;
};
