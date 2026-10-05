// discord_app/modules/directory_channels/GuildDirectoryConstants.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import intl72 from "../../intl/index.native.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ ChannelTypes: c3, Permissions: closure_4 } = Constants);
const HubGuildTemplateId = {
  CREATE: "CREATE",
  HUB_SCHOOL_CLUB: "HUB_SCHOOL_CLUB",
  HUB_STUDY: "HUB_STUDY",
  HUB_CLASS: "HUB_CLASS",
  HUB_SOCIAL: "HUB_SOCIAL",
  HUB_MAJOR: "HUB_MAJOR",
  HUB_DORM: "HUB_DORM",
};
let obj2 = {
  ALL: -1,
  [-1]: "ALL",
  UNCATEGORIZED: 0,
  [0]: "UNCATEGORIZED",
  SCHOOL_CLUB: 1,
  [1]: "SCHOOL_CLUB",
  CLASS: 2,
  [2]: "CLASS",
  STUDY_SOCIAL: 3,
  [3]: "STUDY_SOCIAL",
  MISC: 5,
  [5]: "MISC",
};
let c7 = "883060064561299456";
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryConstants.tsx");

export const DirectoryEntryTypes = { GUILD: 0, [0]: "GUILD", GUILD_SCHEDULED_EVENT: 1, [1]: "GUILD_SCHEDULED_EVENT" };
export const CreateOrAddGuildSlideTypes = {
  GUILD_TEMPLATES: "guild-templates",
  CUSTOMIZE_NEW_GUILD: "customize-new-guild",
  CHOOSE_GUILD: "choose-guild",
  CUSTOMIZE_EXISTING_GUILD: "customize-existing-guild",
  CONFIRMATION: "confirmation",
};
export { HubGuildTemplateId };
export const DirectoryEntryCategories = obj2;
export const HQ_CHANNEL_ID = "883060064561299456";
export const getHubCategories = function getHubCategories(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items1;
  if (arg0 === c7) {
    const obj = { id: "club", value: obj2.SCHOOL_CLUB, label: intl.string(intl72.t["Z+MPN/"]) };
    intl = intl72.intl;
    const items = [obj, , ,];
    obj2 = { id: "class", value: obj2.CLASS, label: intl2.string(intl72.t.dV9uBr) };
    intl2 = intl72.intl;
    items[1] = obj2;
    const obj3 = { id: "study", value: obj2.STUDY_SOCIAL, label: intl3.string(intl72.t.xoHQcn) };
    intl3 = intl72.intl;
    items[2] = obj3;
    const obj4 = { id: "misc", value: obj2.MISC, label: intl4.string(intl72.t.Ao41ri) };
    intl4 = intl72.intl;
    items[3] = obj4;
    items1 = items;
  } else {
    const obj5 = { id: "club", value: obj2.SCHOOL_CLUB, label: intl5.string(intl72.t.oNHFUL), idealSize: 100 };
    intl5 = intl72.intl;
    items1 = [obj5, , ,];
    const obj6 = { id: "class", value: obj2.CLASS, label: intl6.string(intl72.t.V1i8nS) };
    intl6 = intl72.intl;
    items1[1] = obj6;
    const obj7 = { id: "study", value: obj2.STUDY_SOCIAL, label: intl7.string(intl72.t.Z2ygQt), idealSize: 50 };
    intl7 = intl72.intl;
    items1[2] = obj7;
    const obj8 = { id: "misc", value: obj2.MISC, label: intl8.string(intl72.t["0Bg9La"]) };
    intl8 = intl72.intl;
    items1[3] = obj8;
  }
  return items1;
};
export const getHubGuildTemplatesMap = function getHubGuildTemplatesMap() {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let intl37;
  let intl38;
  let intl39;
  let intl4;
  let intl40;
  let intl41;
  let intl42;
  let intl43;
  let intl44;
  let intl45;
  let intl46;
  let intl47;
  let intl48;
  let intl49;
  let intl5;
  let intl50;
  let intl51;
  let intl52;
  let intl53;
  let intl54;
  let intl55;
  let intl56;
  let intl57;
  let intl58;
  let intl59;
  let intl6;
  let intl60;
  let intl61;
  let intl62;
  let intl63;
  let intl64;
  let intl65;
  let intl66;
  let intl67;
  let intl68;
  let intl69;
  let intl7;
  let intl70;
  let intl71;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj18;
  const obj = {};
  const CREATE = obj.CREATE;
  obj2 = {
    id: obj.CREATE,
    code: "2TffvPucqHkN",
    label: intl.string(intl72.t["H3+6BK"]),
    channels: [],
    system_channel_id: null,
  };
  intl = intl72.intl;
  obj[CREATE] = obj2;
  const HUB_SCHOOL_CLUB = obj.HUB_SCHOOL_CLUB;
  const obj3 = {
    id: obj.HUB_SCHOOL_CLUB,
    code: "UMUbvRpRZhS6",
    label: intl2.string(intl72.t.mmFA51),
    channels: items,
    roles: items1,
    system_channel_id: "12",
  };
  intl2 = intl72.intl;
  const obj4 = { id: "00", parent_id: null, name: intl3.string(intl72.t["VCAA/X"]), type: constants.GUILD_CATEGORY };
  intl3 = intl72.intl;
  items = [obj4, , , , , , , , , , ,];
  const obj5 = { id: "01", parent_id: "00", name: intl4.string(intl72.t.GHQoEd), type: constants.GUILD_TEXT };
  intl4 = intl72.intl;
  items[1] = obj5;
  const obj6 = { id: "02", parent_id: "00", name: intl5.string(intl72.t.nSsoSF), type: constants.GUILD_TEXT };
  intl5 = intl72.intl;
  items[2] = obj6;
  const obj7 = { id: "03", parent_id: "00", name: intl6.string(intl72.t.yZCzMa), type: constants.GUILD_TEXT };
  intl6 = intl72.intl;
  items[3] = obj7;
  const obj8 = { id: "10", parent_id: null, name: intl7.string(intl72.t.mobYpC), type: constants.GUILD_CATEGORY };
  intl7 = intl72.intl;
  items[4] = obj8;
  const obj9 = { id: "11", parent_id: "10", name: intl8.string(intl72.t.pIOigB), type: constants.GUILD_TEXT };
  intl8 = intl72.intl;
  items[5] = obj9;
  const obj10 = { id: "12", parent_id: "10", name: intl9.string(intl72.t.ao2wxq), type: constants.GUILD_TEXT };
  intl9 = intl72.intl;
  items[6] = obj10;
  const obj11 = { id: "13", parent_id: "10", name: intl10.string(intl72.t.AIszv8), type: constants.GUILD_TEXT };
  intl10 = intl72.intl;
  items[7] = obj11;
  const obj12 = { id: "20", parent_id: null, name: intl11.string(intl72.t.vcKDMv), type: constants.GUILD_CATEGORY };
  intl11 = intl72.intl;
  items[8] = obj12;
  const obj13 = { id: "21", parent_id: "20", name: intl12.string(intl72.t.XS6gcJ), type: constants.GUILD_VOICE };
  intl12 = intl72.intl;
  items[9] = obj13;
  const obj14 = { id: "22", parent_id: "20", name: intl13.string(intl72.t.hi1Ykg), type: constants.GUILD_VOICE };
  intl13 = intl72.intl;
  items[10] = obj14;
  const obj15 = { id: "22", parent_id: "20", name: intl14.string(intl72.t.vw8oaS), type: constants.GUILD_VOICE };
  intl14 = intl72.intl;
  items[11] = obj15;
  items1 = [{ id: "00", name: "@everyone", permissions: PermissionUtilsAll.DEFAULT }];
  const obj17 = {
    id: "01",
    name: "officers (example)",
    mentionable: true,
    hoist: true,
    permissions: obj18.combine(
      PermissionUtilsAll.DEFAULT,
      constants2.MANAGE_ROLES,
      constants2.MANAGE_CHANNELS,
      constants2.KICK_MEMBERS,
      constants2.BAN_MEMBERS,
      constants2.MANAGE_NICKNAMES,
      constants2.MANAGE_GUILD_EXPRESSIONS,
      constants2.MANAGE_MESSAGES,
      constants2.SEND_TTS_MESSAGES,
    ),
    color: 3066993,
  };
  ({ id: "00", name: "@everyone", permissions: PermissionUtilsAll.DEFAULT });
  items1[1] = obj17;
  obj[HUB_SCHOOL_CLUB] = obj3;
  obj18 = BigFlagUtilsAll;
  const HUB_STUDY = obj.HUB_STUDY;
  const obj19 = {
    id: obj.HUB_STUDY,
    code: "2JBhzzca2vfT",
    label: intl15.string(intl72.t.fYwSi2),
    channels: items2,
    system_channel_id: "12",
  };
  intl15 = intl72.intl;
  const obj20 = { id: "00", parent_id: null, name: intl16.string(intl72.t["HY+vdA"]), type: constants.GUILD_CATEGORY };
  intl16 = intl72.intl;
  items2 = [obj20, , , , , , , , , ,];
  const obj21 = { id: "01", parent_id: "00", name: intl17.string(intl72.t["3eM+Lh"]), type: constants.GUILD_TEXT };
  intl17 = intl72.intl;
  items2[1] = obj21;
  const obj22 = { id: "02", parent_id: "00", name: intl18.string(intl72.t.Qi0D7e), type: constants.GUILD_TEXT };
  intl18 = intl72.intl;
  items2[2] = obj22;
  const obj23 = { id: "10", parent_id: null, name: intl19.string(intl72.t.yZIUVx), type: constants.GUILD_CATEGORY };
  intl19 = intl72.intl;
  items2[3] = obj23;
  const obj24 = { id: "11", parent_id: "10", name: intl20.string(intl72.t.pIOigB), type: constants.GUILD_TEXT };
  intl20 = intl72.intl;
  items2[4] = obj24;
  const obj25 = { id: "12", parent_id: "10", name: intl21.string(intl72.t.ao2wxq), type: constants.GUILD_TEXT };
  intl21 = intl72.intl;
  items2[5] = obj25;
  const obj26 = { id: "12", parent_id: "10", name: intl22.string(intl72.t.AIszv8), type: constants.GUILD_TEXT };
  intl22 = intl72.intl;
  items2[6] = obj26;
  const obj27 = { id: "20", parent_id: null, name: intl23.string(intl72.t.vcKDMv), type: constants.GUILD_CATEGORY };
  intl23 = intl72.intl;
  items2[7] = obj27;
  const obj28 = { id: "21", parent_id: "20", name: intl24.string(intl72.t.XS6gcJ), type: constants.GUILD_VOICE };
  intl24 = intl72.intl;
  items2[8] = obj28;
  const obj29 = {
    id: "22",
    parent_id: "20",
    name: intl25.formatToPlainString(intl72.t.LuNsNf, { number: 1 }),
    type: constants.GUILD_VOICE,
  };
  intl25 = intl72.intl;
  items2[9] = obj29;
  const obj30 = {
    id: "23",
    parent_id: "20",
    name: intl26.formatToPlainString(intl72.t.LuNsNf, { number: 2 }),
    type: constants.GUILD_VOICE,
  };
  intl26 = intl72.intl;
  items2[10] = obj30;
  obj[HUB_STUDY] = obj19;
  const HUB_CLASS = obj.HUB_CLASS;
  const obj31 = {
    id: obj.HUB_CLASS,
    code: "r86WWBwTGspb",
    label: intl27.string(intl72.t.e5gFS3),
    channels: items3,
    system_channel_id: "12",
  };
  intl27 = intl72.intl;
  const obj32 = { id: "00", parent_id: null, name: intl28.string(intl72.t["HY+vdA"]), type: constants.GUILD_CATEGORY };
  intl28 = intl72.intl;
  items3 = [obj32, , , , , , , , , ,];
  const obj33 = { id: "01", parent_id: "00", name: intl29.string(intl72.t["710tNh"]), type: constants.GUILD_TEXT };
  intl29 = intl72.intl;
  items3[1] = obj33;
  const obj34 = { id: "02", parent_id: "00", name: intl30.string(intl72.t.Qi0D7e), type: constants.GUILD_TEXT };
  intl30 = intl72.intl;
  items3[2] = obj34;
  const obj35 = { id: "10", parent_id: null, name: intl31.string(intl72.t.yZIUVx), type: constants.GUILD_CATEGORY };
  intl31 = intl72.intl;
  items3[3] = obj35;
  const obj36 = { id: "11", parent_id: "10", name: intl32.string(intl72.t.pIOigB), type: constants.GUILD_TEXT };
  intl32 = intl72.intl;
  items3[4] = obj36;
  const obj37 = { id: "12", parent_id: "10", name: intl33.string(intl72.t.ao2wxq), type: constants.GUILD_TEXT };
  intl33 = intl72.intl;
  items3[5] = obj37;
  const obj38 = { id: "13", parent_id: "10", name: intl34.string(intl72.t.AIszv8), type: constants.GUILD_TEXT };
  intl34 = intl72.intl;
  items3[6] = obj38;
  const obj39 = { id: "20", parent_id: null, name: intl35.string(intl72.t.vcKDMv), type: constants.GUILD_CATEGORY };
  intl35 = intl72.intl;
  items3[7] = obj39;
  const obj40 = { id: "21", parent_id: "20", name: intl36.string(intl72.t.XS6gcJ), type: constants.GUILD_VOICE };
  intl36 = intl72.intl;
  items3[8] = obj40;
  const obj41 = {
    id: "22",
    parent_id: "20",
    name: intl37.formatToPlainString(intl72.t.LuNsNf, { number: 1 }),
    type: constants.GUILD_VOICE,
  };
  intl37 = intl72.intl;
  items3[9] = obj41;
  const obj42 = {
    id: "23",
    parent_id: "20",
    name: intl38.formatToPlainString(intl72.t.LuNsNf, { number: 2 }),
    type: constants.GUILD_VOICE,
  };
  intl38 = intl72.intl;
  items3[10] = obj42;
  obj[HUB_CLASS] = obj31;
  const HUB_SOCIAL = obj.HUB_SOCIAL;
  const obj43 = {
    id: obj.HUB_SOCIAL,
    code: "AvvtXE3mfbCR",
    label: intl39.string(intl72.t.oOj7It),
    channels: items4,
    system_channel_id: "02",
  };
  intl39 = intl72.intl;
  const obj44 = { id: "00", parent_id: null, name: intl40.string(intl72.t.yZIUVx), type: constants.GUILD_CATEGORY };
  intl40 = intl72.intl;
  items4 = [obj44, , , , , , , ,];
  const obj45 = { id: "01", parent_id: "00", name: intl41.string(intl72.t.pIOigB), type: constants.GUILD_TEXT };
  intl41 = intl72.intl;
  items4[1] = obj45;
  const obj46 = { id: "02", parent_id: "00", name: intl42.string(intl72.t.ao2wxq), type: constants.GUILD_TEXT };
  intl42 = intl72.intl;
  items4[2] = obj46;
  const obj47 = { id: "03", parent_id: "00", name: intl43.string(intl72.t.AIszv8), type: constants.GUILD_TEXT };
  intl43 = intl72.intl;
  items4[3] = obj47;
  const obj48 = { id: "04", parent_id: "00", name: intl44.string(intl72.t.d4F8gP), type: constants.GUILD_TEXT };
  intl44 = intl72.intl;
  items4[4] = obj48;
  const obj49 = { id: "10", parent_id: null, name: intl45.string(intl72.t.vcKDMv), type: constants.GUILD_CATEGORY };
  intl45 = intl72.intl;
  items4[5] = obj49;
  const obj50 = { id: "11", parent_id: "10", name: intl46.string(intl72.t.CLWKNs), type: constants.GUILD_VOICE };
  intl46 = intl72.intl;
  items4[6] = obj50;
  const obj51 = { id: "12", parent_id: "10", name: intl47.string(intl72.t.g3qPRn), type: constants.GUILD_VOICE };
  intl47 = intl72.intl;
  items4[7] = obj51;
  const obj52 = { id: "13", parent_id: "10", name: intl48.string(intl72.t["yQZpe/"]), type: constants.GUILD_VOICE };
  intl48 = intl72.intl;
  items4[8] = obj52;
  obj[HUB_SOCIAL] = obj43;
  const HUB_MAJOR = obj.HUB_MAJOR;
  const obj53 = {
    id: obj.HUB_MAJOR,
    code: "FhmfDR6Arvsc",
    label: intl49.string(intl72.t["9kly4U"]),
    channels: items5,
    system_channel_id: "12",
  };
  intl49 = intl72.intl;
  const obj54 = { id: "00", parent_id: null, name: intl50.string(intl72.t["HY+vdA"]), type: constants.GUILD_CATEGORY };
  intl50 = intl72.intl;
  items5 = [obj54, , , , , , , , , ,];
  const obj55 = { id: "01", parent_id: "00", name: intl51.string(intl72.t.yZCzMa), type: constants.GUILD_TEXT };
  intl51 = intl72.intl;
  items5[1] = obj55;
  const obj56 = { id: "02", parent_id: "00", name: intl52.string(intl72.t.Qi0D7e), type: constants.GUILD_TEXT };
  intl52 = intl72.intl;
  items5[2] = obj56;
  const obj57 = { id: "10", parent_id: null, name: intl53.string(intl72.t.yZIUVx), type: constants.GUILD_CATEGORY };
  intl53 = intl72.intl;
  items5[3] = obj57;
  const obj58 = { id: "11", parent_id: "10", name: intl54.string(intl72.t.pIOigB), type: constants.GUILD_TEXT };
  intl54 = intl72.intl;
  items5[4] = obj58;
  const obj59 = { id: "12", parent_id: "10", name: intl55.string(intl72.t.ao2wxq), type: constants.GUILD_TEXT };
  intl55 = intl72.intl;
  items5[5] = obj59;
  const obj60 = { id: "13", parent_id: "10", name: intl56.string(intl72.t.AIszv8), type: constants.GUILD_TEXT };
  intl56 = intl72.intl;
  items5[6] = obj60;
  const obj61 = { id: "20", parent_id: null, name: intl57.string(intl72.t.vcKDMv), type: constants.GUILD_CATEGORY };
  intl57 = intl72.intl;
  items5[7] = obj61;
  const obj62 = { id: "21", parent_id: "20", name: intl58.string(intl72.t.XS6gcJ), type: constants.GUILD_VOICE };
  intl58 = intl72.intl;
  items5[8] = obj62;
  const obj63 = {
    id: "22",
    parent_id: "20",
    name: intl59.formatToPlainString(intl72.t.LuNsNf, { number: 1 }),
    type: constants.GUILD_VOICE,
  };
  intl59 = intl72.intl;
  items5[9] = obj63;
  const obj64 = {
    id: "23",
    parent_id: "20",
    name: intl60.formatToPlainString(intl72.t.LuNsNf, { number: 2 }),
    type: constants.GUILD_VOICE,
  };
  intl60 = intl72.intl;
  items5[10] = obj64;
  obj[HUB_MAJOR] = obj53;
  const HUB_DORM = obj.HUB_DORM;
  const obj65 = {
    id: obj.HUB_DORM,
    code: "fkq8xHfrGE58",
    label: intl61.string(intl72.t["ppGw/P"]),
    channels: items6,
    system_channel_id: "12",
  };
  intl61 = intl72.intl;
  const obj66 = { id: "00", parent_id: null, name: intl62.string(intl72.t["HY+vdA"]), type: constants.GUILD_CATEGORY };
  intl62 = intl72.intl;
  items6 = [obj66, , , , , , , , ,];
  const obj67 = { id: "01", parent_id: "00", name: intl63.string(intl72.t["b2+FCc"]), type: constants.GUILD_TEXT };
  intl63 = intl72.intl;
  items6[1] = obj67;
  const obj68 = { id: "10", parent_id: null, name: intl64.string(intl72.t.yZIUVx), type: constants.GUILD_CATEGORY };
  intl64 = intl72.intl;
  items6[2] = obj68;
  const obj69 = { id: "11", parent_id: "10", name: intl65.string(intl72.t.pIOigB), type: constants.GUILD_TEXT };
  intl65 = intl72.intl;
  items6[3] = obj69;
  const obj70 = { id: "12", parent_id: "10", name: intl66.string(intl72.t.ao2wxq), type: constants.GUILD_TEXT };
  intl66 = intl72.intl;
  items6[4] = obj70;
  const obj71 = { id: "13", parent_id: "10", name: intl67.string(intl72.t.AIszv8), type: constants.GUILD_TEXT };
  intl67 = intl72.intl;
  items6[5] = obj71;
  const obj72 = { id: "20", parent_id: null, name: intl68.string(intl72.t.vcKDMv), type: constants.GUILD_CATEGORY };
  intl68 = intl72.intl;
  items6[6] = obj72;
  const obj73 = { id: "21", parent_id: "20", name: intl69.string(intl72.t.XS6gcJ), type: constants.GUILD_VOICE };
  intl69 = intl72.intl;
  items6[7] = obj73;
  const obj74 = { id: "22", parent_id: "20", name: intl70.string(intl72.t.g3qPRn), type: constants.GUILD_VOICE };
  intl70 = intl72.intl;
  items6[8] = obj74;
  const obj75 = { id: "23", parent_id: "20", name: intl71.string(intl72.t.CLWKNs), type: constants.GUILD_VOICE };
  intl71 = intl72.intl;
  items6[9] = obj75;
  obj[HUB_DORM] = obj65;
  return obj;
};
