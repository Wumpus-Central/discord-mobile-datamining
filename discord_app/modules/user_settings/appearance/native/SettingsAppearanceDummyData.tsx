// discord_app/modules/user_settings/appearance/native/SettingsAppearanceDummyData.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef10229 from "../../../../../_runtime/metro/10229__.js";
import _modDef14034 from "../../../../../_runtime/metro/14034__.js";
import _modDef15359 from "../../../../../_runtime/metro/15359__.js";
import _modDef15360 from "../../../../../_runtime/metro/15360__.js";
import _modDef15361 from "../../../../../_runtime/metro/15361__.js";
import _modDef15362 from "../../../../../_runtime/metro/15362__.js";
import _modDef15363 from "../../../../../_runtime/metro/15363__.js";
import _modDef15364 from "../../../../../_runtime/metro/15364__.js";
import _modDef15365 from "../../../../../_runtime/metro/15365__.js";
import _modDef15366 from "../../../../../_runtime/metro/15366__.js";
import _modDef15367 from "../../../../../_runtime/metro/15367__.js";
import _modDef15368 from "../../../../../_runtime/metro/15368__.js";
import _modDef15369 from "../../../../../_runtime/metro/15369__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const StatusTypes = Constants.StatusTypes;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDummyData.tsx");

export default function _default() {
  const items = [{ id: "1", kind: "messages-header" }, , , , , , , , , ,];
  let obj = { id: "2", kind: "activity-cards", cards: null };
  obj = { title: null, subtitle: null, kind: "activity", image: null, avatars: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.B6GPzA);
  const intl2 = util.intl;
  obj.subtitle = intl2.string(util.t["Tnrh/k"]);
  obj.image = _modDef15359;
  const items1 = [_modDef15360, _modDef15361, _modDef15362, _modDef15363, _modDef15364];
  obj.avatars = items1;
  const items2 = [obj];
  obj = { title: null, subtitle: null, kind: "voice-chat", image: null };
  const intl3 = util.intl;
  obj.title = intl3.string(util.t.YAgqmE);
  const intl4 = util.intl;
  obj.subtitle = intl4.string(util.t["9YJgal"]);
  obj.image = _modDef15365;
  items2[1] = obj;
  obj.cards = items2;
  items[1] = obj;
  const obj1 = {
    id: "3",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    isUnread: true,
    avatar1: null,
  };
  const intl5 = util.intl;
  obj1.timestamp = intl5.formatToPlainString(util.t["XIGt+W"], { minutes: 24 });
  const intl6 = util.intl;
  obj1.title = intl6.string(util.t["mK5Zd+"]);
  const intl7 = util.intl;
  obj1.preview = intl7.string(util.t.cvvVUV);
  obj1.avatar1 = _modDef15366;
  items[2] = obj1;
  const obj2 = {
    id: "4",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    isUnread: true,
    avatar1: null,
    avatar2: null,
  };
  const intl8 = util.intl;
  obj2.timestamp = intl8.formatToPlainString(util.t["XIGt+W"], { minutes: 32 });
  const intl9 = util.intl;
  obj2.title = intl9.string(util.t.FpJH9k);
  const intl10 = util.intl;
  obj2.preview = intl10.string(util.t.F1WIrQ);
  obj2.avatar1 = _modDef15367;
  obj2.avatar2 = _modDef15368;
  items[3] = obj2;
  const obj3 = {
    id: "5",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    avatar1: null,
    status: null,
  };
  const intl11 = util.intl;
  obj3.timestamp = intl11.formatToPlainString(util.t.rhY1Rs, { hours: 1 });
  const intl12 = util.intl;
  obj3.title = intl12.string(util.t.PHbyD7);
  const intl13 = util.intl;
  obj3.preview = intl13.string(util.t.GSuP1s);
  obj3.avatar1 = _modDef14034;
  obj3.status = StatusTypes.IDLE;
  items[4] = obj3;
  const obj4 = {
    id: "7",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    avatar1: null,
    avatar2: null,
  };
  const intl14 = util.intl;
  obj4.timestamp = intl14.formatToPlainString(util.t.rhY1Rs, { hours: 2 });
  const intl15 = util.intl;
  obj4.title = intl15.string(util.t["0HGnUV"]);
  const intl16 = util.intl;
  obj4.preview = intl16.string(util.t["VYL+vm"]);
  obj4.avatar1 = _modDef10229;
  obj4.avatar2 = _modDef15362;
  items[5] = obj4;
  const obj5 = { id: "10", kind: "channel-row", timestamp: null, title: null, preview: null, avatar1: null };
  const intl17 = util.intl;
  obj5.timestamp = intl17.formatToPlainString(util.t.rhY1Rs, { hours: 2 });
  const intl18 = util.intl;
  obj5.title = intl18.string(util.t["z+f+zN"]);
  const intl19 = util.intl;
  obj5.preview = intl19.string(util.t.Wy2xnv);
  obj5.avatar1 = _modDef15368;
  items[6] = obj5;
  const obj6 = {
    id: "11",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    avatar1: null,
    avatar2: null,
  };
  const intl20 = util.intl;
  obj6.timestamp = intl20.formatToPlainString(util.t.rhY1Rs, { hours: 4 });
  const intl21 = util.intl;
  obj6.title = intl21.string(util.t["AYOqO/"]);
  const intl22 = util.intl;
  obj6.preview = intl22.string(util.t.OrbvPP);
  obj6.avatar1 = _modDef15363;
  obj6.avatar2 = _modDef10229;
  items[7] = obj6;
  const obj7 = {
    id: "12",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    avatar1: null,
    status: null,
  };
  const intl23 = util.intl;
  obj7.timestamp = intl23.formatToPlainString(util.t.rhY1Rs, { hours: 6 });
  const intl24 = util.intl;
  obj7.title = intl24.string(util.t["86rWJp"]);
  const intl25 = util.intl;
  obj7.preview = intl25.string(util.t.dFT4dX);
  obj7.avatar1 = _modDef15369;
  obj7.status = StatusTypes.DND;
  items[8] = obj7;
  const obj8 = { id: "13", kind: "channel-row", timestamp: null, title: null, preview: null, avatar1: null };
  const intl26 = util.intl;
  obj8.timestamp = intl26.formatToPlainString(util.t.rhY1Rs, { hours: 18 });
  const intl27 = util.intl;
  obj8.title = intl27.string(util.t["z3+vGV"]);
  const intl28 = util.intl;
  obj8.preview = intl28.string(util.t.Zj8Sl1);
  obj8.avatar1 = _modDef15363;
  items[9] = obj8;
  const obj9 = {
    id: "15",
    kind: "channel-row",
    timestamp: null,
    title: null,
    preview: null,
    avatar1: null,
    status: null,
  };
  const intl29 = util.intl;
  obj9.timestamp = intl29.formatToPlainString(util.t.rhY1Rs, { hours: 21 });
  const intl30 = util.intl;
  obj9.title = intl30.string(util.t["8SENG2"]);
  const intl31 = util.intl;
  obj9.preview = intl31.string(util.t["2ziAWp"]);
  obj9.avatar1 = _modDef15361;
  obj9.status = StatusTypes.DND;
  items[10] = obj9;
  return items;
}
