// discord_app/modules/checkpoint/native/components/screens/stats/friends/FriendsHeader.tsx
import _mod17 from "../../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import _modDef3309 from "../../../../../Checkpoint.messages.js";
import _modDef3341 from "../../../../../Checkpoint2026.messages.js";
import FriendsIcon from "../../../../../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import CheckpointConstants from "../../../../../CheckpointConstants.tsx";
import CheckpointTextDefault from "../../../CheckpointText.tsx";
import CheckpointDisplayTextDefault from "../../../CheckpointDisplayText.tsx";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { header: { gap: nativeDefault.space.PX_12 }, heading: null, title: null, titleText: null };
let obj2 = { gap: nativeDefault.space.PX_12 };
obj.heading = { gap: nativeDefault.space.PX_8 };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/friends/FriendsHeader.tsx",
);

export default function FriendsHeader(title) {
  title = title.title;
  ({ titleAccessibilityLabel, description } = title);
  const tmp = closure_7();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.heading, children: null };
  const obj3 = { style: tmp.title, children: null };
  items = [hasOwnProperty(FriendsIcon.FriendsIcon, { size: "refresh_sm", color: CHECKPOINT_PRIMARY })];
  const obj5 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const intl = util.intl;
  const obj4 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  const tmp2 = CheckpointTextDefault;
  obj5.children = intl.string(_modDef3309.ZQakPR).toLocaleUpperCase();
  items[1] = hasOwnProperty(tmp2, obj5);
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3)];
  const obj6 = { accessibilityLabel: titleAccessibilityLabel, children: null };
  const stringResult = intl.string(_modDef3309.ZQakPR);
  obj6.children = title.toLocaleUpperCase();
  items1[1] = hasOwnProperty(CheckpointDisplayTextDefault, obj6);
  obj2.children = items1;
  const items2 = [
    timestampProducer(View, obj2),
    hasOwnProperty(CheckpointTextDefault, { variant: "heading-lg/medium", children: description }),
  ];
  obj.children = items2;
  return timestampProducer(View, obj);
}
export function getSquadTitleAccessibilityLabel(items7) {
  const found = items7.filter((item) => "" !== item.trim());
  if (0 === found.length) {
    const intl = util.intl;
    let stringResult = intl.string(_modDef3309.OzY5Ns);
  } else {
    const intl2 = util.intl;
    const obj = { names: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
    obj.names = listFormat.format(found);
    stringResult = intl2.formatToPlainString(_modDef3341.XB99KC, obj);
  }
  return stringResult;
}
export function getSidekickTitleAccessibilityLabel(name) {
  if ("" === name.trim()) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef3309["+uwOHt"]);
  } else {
    const intl = util.intl;
    const obj = { name };
    stringResult = intl.formatToPlainString(_modDef3341.xRtlbW, obj);
  }
  return stringResult;
}
