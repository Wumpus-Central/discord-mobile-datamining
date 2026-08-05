// discord_app/modules/activities/confirmActivityChangeAlert.tsx
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("computeChannelName").fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel) {
  let str = "";
  if (null != channel) {
    let obj = require("../channel/useChannelName.tsx") /* computeChannelName */;
    str = obj.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
  }
  obj = { title: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, body: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.XkIWkk);
  const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["ETE/oC"]);
  const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["cY+Oob"]);
  obj[3] = arg2;
  obj[4] = arg3;
  const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  if (name == null) {
    const intl5 = tmp6(1236).intl;
    name = intl5.string(tmp6(1236).t.G99XFs);
  }
  obj = { currentApplicationName: name, currentApplicationChannelName: null };
  const obj2 = require("../../actions/AlertActionCreators.tsx");
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = tmp6(1236).intl;
    str = intl6.string(tmp6(1236).t.OGUjmt);
  }
  obj[1] = str;
  obj[5] = intl4.format(require("../../intl/index.native.tsx") /* getSystemLocale */.t["5/Xort"], obj);
  obj2.show(obj);
};