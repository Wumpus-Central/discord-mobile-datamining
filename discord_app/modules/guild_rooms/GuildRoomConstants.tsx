// discord_app/modules/guild_rooms/GuildRoomConstants.tsx
import intl4 from "../../intl/index.native.tsx";
import _modDef2393 from "GuildRooms.messages.js";
import GuildRoomSeats from "../../../discord_common/js/shared/shared-constants/GuildRoomSeats.tsx";
import GuildRoomBackgrounds from "../../../discord_common/js/shared/shared-constants/GuildRoomBackgrounds.tsx";
import _modDef5054 from "../../../discord_assets/assets/guild-room/guild-room-bg-1.webp.js";
import _modDef5055 from "../../../discord_assets/assets/guild-room/test-background/Room-Partial-Posters-Blurred.webp.js";
import GuildRoomBackgroundPositions from "../../../discord_common/js/shared/shared-constants/GuildRoomBackgroundPositions.tsx";
import _modDef5057 from "../../../discord_assets/assets/guild-room/plant_dead.png.js";
import _modDef5058 from "../../../discord_assets/assets/guild-room/plant_dying.png.js";
import _modDef5059 from "../../../discord_assets/assets/guild-room/plant_live.png.js";
import _modDef5060 from "../../../discord_assets/assets/guild-room/plant_vase.png.js";
import _modDef5061 from "../../../discord_assets/assets/guild-room/test-background/Duck.png.js";
import _modDef5062 from "../../../discord_assets/assets/guild-room/guild-room-note-pad.png.js";
import _modDef5063 from "../../../discord_assets/assets/guild-room/guild-room-bg-2.webp.js";
import _modDef5064 from "../../../discord_assets/assets/guild-room/plant-dead-2.png.js";
import _modDef5065 from "../../../discord_assets/assets/guild-room/plant-dying-2.png.js";
import _modDef5066 from "../../../discord_assets/assets/guild-room/plant-live-2.png.js";
import _modDef5067 from "../../../discord_assets/assets/guild-room/plant-vase-2.png.js";
import _modDef5068 from "../../../discord_assets/assets/guild-room/guild-room-duck-2.png.js";
import size from "../../../_runtime/metro/00002__.js";

let C_LGlh, yG_xS0;

let items;
let items1;
let obj29;
let obj3;
const getLabel = () => {
  let intl2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { seatType: intl2.string(ytIYuY), number };
  const crFI7e = _modDef2393.crFI7e;
  intl2 = intl4.intl;
  return formatToPlainString(crFI7e, obj);
};
const getLabel2 = () => {
  let intl2;
  let intl3;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { seatType: intl2.string(C_LGlh), position: intl3.string(Qt29nt) };
  const LFdLjz = _modDef2393.LFdLjz;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return formatToPlainString(LFdLjz, obj);
};
let obj = {};
const obj2 = {
  background: _modDef5054,
  backgroundBlurred: _modDef5055,
  aspectRatio: 1.366583541147132,
  getName() {
    const intl = intl4.intl;
    return intl.formatToPlainString(_modDef2393["3xb4VY"], { number: 1 });
  },
  seats: obj3,
  plants: items,
  duck: { asset: _modDef5061, position: { x: 67.3, y: 45 }, width: 4.8 },
  notePad: { asset: _modDef5062, position: { x: 81.5, y: 84.5 }, width: 4 },
  screen: {
    topLeft: { x: 56.8, y: 16.15 },
    topRight: { x: 75.85, y: 23 },
    bottomRight: { x: 75.3, y: 41.3 },
    bottomLeft: { x: 56.95, y: 33.75 },
  },
};
const DEFAULT = GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT;
obj3 = {};
const obj4 = {
  name: "PC_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][0],
};
const SEAT_1 = GuildRoomSeats.GuildRoomSeats.SEAT_1;
obj3[SEAT_1] = obj4;
const obj5 = {
  name: "PC_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][1],
};
const SEAT_2 = GuildRoomSeats.GuildRoomSeats.SEAT_2;
obj3[SEAT_2] = obj5;
const obj6 = {
  name: "PC_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][2],
};
const SEAT_3 = GuildRoomSeats.GuildRoomSeats.SEAT_3;
obj3[SEAT_3] = obj6;
const obj7 = {
  name: "DUO_SEAT_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][3],
};
const SEAT_4 = GuildRoomSeats.GuildRoomSeats.SEAT_4;
obj3[SEAT_4] = obj7;
const obj8 = {
  name: "DUO_SEAT_2",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][4],
};
const SEAT_5 = GuildRoomSeats.GuildRoomSeats.SEAT_5;
obj3[SEAT_5] = obj8;
const obj9 = {
  name: "DUO_SEAT_STANDING_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][5],
};
const SEAT_6 = GuildRoomSeats.GuildRoomSeats.SEAT_6;
obj3[SEAT_6] = obj9;
const obj10 = {
  name: "MAIN_COUCH_SEAT_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][6],
};
const SEAT_7 = GuildRoomSeats.GuildRoomSeats.SEAT_7;
obj3[SEAT_7] = obj10;
const obj11 = {
  name: "MAIN_COUCH_SEAT_2",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][7],
};
const SEAT_8 = GuildRoomSeats.GuildRoomSeats.SEAT_8;
obj3[SEAT_8] = obj11;
const obj12 = {
  name: "MAIN_COUCH_SEAT_3",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][8],
};
const SEAT_9 = GuildRoomSeats.GuildRoomSeats.SEAT_9;
obj3[SEAT_9] = obj12;
const obj13 = {
  name: "MAIN_COUCH_SEAT_4",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][9],
};
const SEAT_10 = GuildRoomSeats.GuildRoomSeats.SEAT_10;
obj3[SEAT_10] = obj13;
const obj14 = {
  name: "MAIN_COUCH_SEAT_5",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][10],
};
const SEAT_11 = GuildRoomSeats.GuildRoomSeats.SEAT_11;
obj3[SEAT_11] = obj14;
const obj15 = {
  name: "SIDE_GROUP_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][11],
};
const SEAT_12 = GuildRoomSeats.GuildRoomSeats.SEAT_12;
obj3[SEAT_12] = obj15;
const obj16 = {
  name: "SIDE_GROUP_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][12],
};
const SEAT_13 = GuildRoomSeats.GuildRoomSeats.SEAT_13;
obj3[SEAT_13] = obj16;
const obj17 = {
  name: "SIDE_GROUP_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][13],
};
const SEAT_14 = GuildRoomSeats.GuildRoomSeats.SEAT_14;
obj3[SEAT_14] = obj17;
const obj18 = {
  name: "SIDE_GROUP_SEAT_STANDING_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][14],
};
const SEAT_15 = GuildRoomSeats.GuildRoomSeats.SEAT_15;
obj3[SEAT_15] = obj18;
const obj19 = {
  name: "BACKROOM_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][15],
  dim: true,
};
const SEAT_16 = GuildRoomSeats.GuildRoomSeats.SEAT_16;
obj3[SEAT_16] = obj19;
const obj20 = {
  name: "BACKROOM_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][16],
  dim: true,
};
const SEAT_17 = GuildRoomSeats.GuildRoomSeats.SEAT_17;
obj3[SEAT_17] = obj20;
const obj21 = {
  name: "BACKROOM_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][17],
  dim: true,
};
const SEAT_18 = GuildRoomSeats.GuildRoomSeats.SEAT_18;
obj3[SEAT_18] = obj21;
const obj22 = {
  name: "RAFTERS_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][18],
};
const SEAT_19 = GuildRoomSeats.GuildRoomSeats.SEAT_19;
obj3[SEAT_19] = obj22;
const obj23 = {
  name: "RAFTERS_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][19],
};
const SEAT_20 = GuildRoomSeats.GuildRoomSeats.SEAT_20;
obj3[SEAT_20] = obj23;
const obj24 = {
  name: "RAFTERS_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][20],
};
const SEAT_21 = GuildRoomSeats.GuildRoomSeats.SEAT_21;
obj3[SEAT_21] = obj24;
const obj25 = {
  name: "PC_SEAT_4",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[GuildRoomBackgrounds.GuildRoomBackgrounds.DEFAULT][21],
};
const SEAT_22 = GuildRoomSeats.GuildRoomSeats.SEAT_22;
obj3[SEAT_22] = obj25;
const point = {
  plantDeadAsset: _modDef5057,
  plantDyingAsset: _modDef5058,
  plantLiveAsset: _modDef5059,
  plantVaseAsset: _modDef5060,
  x: 45.57,
  y: 50.62,
};
items = [point];
({ asset: _modDef5061, position: { x: 67.3, y: 45 }, width: 4.8 });
obj[DEFAULT] = obj2;
const obj28 = {
  background: _modDef5063,
  backgroundBlurred: _modDef5055,
  aspectRatio: 1.2894117647058823,
  getName() {
    const intl = intl4.intl;
    return intl.formatToPlainString(_modDef2393["3xb4VY"], { number: 2 });
  },
  seats: obj29,
  plants: items1,
  duck: { asset: _modDef5068, position: { x: 64.6, y: 58.5 }, width: 4.8 },
  notePad: { asset: _modDef5062, position: { x: 69, y: 78.5 }, width: 4 },
  screen: {
    topLeft: { x: 51.85, y: 33.5 },
    topRight: { x: 69.15, y: 40.5 },
    bottomRight: { x: 69.3, y: 57.3 },
    bottomLeft: { x: 51.95, y: 49.1 },
  },
};
({ asset: _modDef5062, position: { x: 81.5, y: 84.5 }, width: 4 });
const LIVING_ROOM_2 = GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2;
obj29 = {};
const obj30 = {
  name: "PC_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][0],
};
const SEAT_110 = GuildRoomSeats.GuildRoomSeats.SEAT_1;
obj29[SEAT_110] = obj30;
const obj31 = {
  name: "PC_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][1],
};
const SEAT_23 = GuildRoomSeats.GuildRoomSeats.SEAT_2;
obj29[SEAT_23] = obj31;
const obj32 = {
  name: "PC_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][2],
};
const SEAT_32 = GuildRoomSeats.GuildRoomSeats.SEAT_3;
obj29[SEAT_32] = obj32;
const obj33 = {
  name: "DUO_SEAT_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][3],
};
const SEAT_42 = GuildRoomSeats.GuildRoomSeats.SEAT_4;
const YpJ7QS = _modDef2393.YpJ7QS;
obj29[SEAT_42] = obj33;
const obj34 = {
  name: "DUO_SEAT_2",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][4],
};
const SEAT_52 = GuildRoomSeats.GuildRoomSeats.SEAT_5;
const wxkoLF = _modDef2393.wxkoLF;
obj29[SEAT_52] = obj34;
const obj35 = {
  name: "DUO_SEAT_STANDING_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][5],
};
const SEAT_62 = GuildRoomSeats.GuildRoomSeats.SEAT_6;
const p7JgFM = _modDef2393.p7JgFM;
obj29[SEAT_62] = obj35;
const obj36 = {
  name: "MAIN_COUCH_SEAT_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][6],
};
const SEAT_72 = GuildRoomSeats.GuildRoomSeats.SEAT_7;
const lQKxC5 = _modDef2393.lQKxC5;
obj29[SEAT_72] = obj36;
const obj37 = {
  name: "MAIN_COUCH_SEAT_2",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][7],
};
const SEAT_82 = GuildRoomSeats.GuildRoomSeats.SEAT_8;
const WMBV4i = _modDef2393.WMBV4i;
obj29[SEAT_82] = obj37;
const obj38 = {
  name: "MAIN_COUCH_SEAT_3",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][8],
};
const SEAT_92 = GuildRoomSeats.GuildRoomSeats.SEAT_9;
yG_xS0 = _modDef2393["yG+xS0"];
obj29[SEAT_92] = obj38;
const obj39 = {
  name: "MAIN_COUCH_SEAT_4",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][9],
};
const SEAT_102 = GuildRoomSeats.GuildRoomSeats.SEAT_10;
obj29[SEAT_102] = obj39;
const obj40 = {
  name: "MAIN_COUCH_SEAT_5",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][10],
};
const SEAT_112 = GuildRoomSeats.GuildRoomSeats.SEAT_11;
const wjBOG8 = _modDef2393.wjBOG8;
const iVfA9i = _modDef2393.iVfA9i;
obj29[SEAT_112] = obj40;
const obj41 = {
  name: "SIDE_GROUP_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][11],
};
const SEAT_122 = GuildRoomSeats.GuildRoomSeats.SEAT_12;
obj29[SEAT_122] = obj41;
const obj42 = {
  name: "SIDE_GROUP_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][12],
};
const SEAT_132 = GuildRoomSeats.GuildRoomSeats.SEAT_13;
obj29[SEAT_132] = obj42;
const obj43 = {
  name: "SIDE_GROUP_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][13],
};
const SEAT_142 = GuildRoomSeats.GuildRoomSeats.SEAT_14;
obj29[SEAT_142] = obj43;
const obj44 = {
  name: "SIDE_GROUP_SEAT_STANDING_1",
  getLabel: getLabel2,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][14],
};
const SEAT_152 = GuildRoomSeats.GuildRoomSeats.SEAT_15;
C_LGlh = _modDef2393["C+LGlh"];
const Qt29nt = _modDef2393.Qt29nt;
obj29[SEAT_152] = obj44;
const obj45 = {
  name: "BACKROOM_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][15],
};
const SEAT_162 = GuildRoomSeats.GuildRoomSeats.SEAT_16;
obj29[SEAT_162] = obj45;
const obj46 = {
  name: "BACKROOM_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][16],
  dim: true,
};
const SEAT_172 = GuildRoomSeats.GuildRoomSeats.SEAT_17;
obj29[SEAT_172] = obj46;
const obj47 = {
  name: "BACKROOM_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][17],
};
const SEAT_182 = GuildRoomSeats.GuildRoomSeats.SEAT_18;
const lkzfot = _modDef2393.lkzfot;
obj29[SEAT_182] = obj47;
const obj48 = {
  name: "RAFTERS_SEAT_1",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][18],
};
const SEAT_192 = GuildRoomSeats.GuildRoomSeats.SEAT_19;
obj29[SEAT_192] = obj48;
const obj49 = {
  name: "RAFTERS_SEAT_2",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][19],
};
const SEAT_202 = GuildRoomSeats.GuildRoomSeats.SEAT_20;
obj29[SEAT_202] = obj49;
const obj50 = {
  name: "RAFTERS_SEAT_3",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][20],
};
const SEAT_212 = GuildRoomSeats.GuildRoomSeats.SEAT_21;
const IE3e0y = _modDef2393.IE3e0y;
obj29[SEAT_212] = obj50;
const obj51 = {
  name: "PC_SEAT_4",
  getLabel,
  position:
    GuildRoomBackgroundPositions.GUILD_ROOM_BACKGROUND_POSITIONS[
      GuildRoomBackgrounds.GuildRoomBackgrounds.LIVING_ROOM_2
    ][21],
};
const SEAT_222 = GuildRoomSeats.GuildRoomSeats.SEAT_22;
const ytIYuY = _modDef2393.ytIYuY;
let c1 = 4;
obj29[SEAT_222] = obj51;
const point1 = {
  plantDeadAsset: _modDef5064,
  plantDyingAsset: _modDef5065,
  plantLiveAsset: _modDef5066,
  plantVaseAsset: _modDef5067,
  x: 41,
  y: 46,
};
items1 = [point1];
({ asset: _modDef5068, position: { x: 64.6, y: 58.5 }, width: 4.8 });
obj[LIVING_ROOM_2] = obj28;
({ asset: _modDef5062, position: { x: 69, y: 78.5 }, width: 4 });
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomConstants.tsx");

export const DEFAULT_BACKGROUND_POSITION = { imageOffsetX: 0, imageOffsetY: 0, imageWidth: 0, imageHeight: 0 };
export const BACKGROUND_BLUR_WIDTH_FACTOR = 0.0228310502283105;
export const getBlurredBackgroundScale = function getBlurredBackgroundScale(arg0, arg1) {
  let num = 0.045662100456621;
  if (arg1) {
    num = 0.045662100456621 * arg0;
  }
  return 1 + num;
};
export const GUILD_ROOM_BACKGROUND_CONFIG = obj;
