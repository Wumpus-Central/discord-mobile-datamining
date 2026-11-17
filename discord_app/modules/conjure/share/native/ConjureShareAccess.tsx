// === Module 14573: ConjureShareAccess ===

// Module 14573 (ConjureShareAccess)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ToastUtils from "ToastUtils" /* 6008 */;
import GuildIcon from "GuildIcon" /* 7730 */;
import TableRadioRow from "TableRadioRow" /* 7757 */;
import ClipboardUtils from "ClipboardUtils" /* 7953 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 14439 */;
import ConjureChangeListDefault from "ConjureChangeList" /* 14545 */;
import buildConjureProjectLinkDefault from "buildConjureProjectLink" /* 14577 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
function ConjureShareServersSection(servers) {
  servers = servers.servers;
  let title = servers.title;
  ({ current, candidates, picked } = servers);
  if (0 !== candidates.length) {
    let tmp5 = null;
    if (current.length > 0) {
      let obj = {
        title,
        hasIcons: true,
        children: current.map((guild) => {
              const obj = { label: guild.name, icon: null };
              const obj2 = { guild, size: servers(7730).GuildIconSizes.SMALL_32 };
              obj.icon = closure_1_5(GuildIconDefault, obj2);
              return closure_1_5(servers(7453).TableRow, obj, guild.id);
            })
      };
      tmp5 = closure_5(servers(7756).TableRowGroup, obj);
    }
    items = [tmp5, , , ];
    let tmp2Result = null;
    if (candidates.length > 0) {
      if (current.length > 0) {
        const intl = tmp10(1113).intl;
        title = intl.string(_modDef4133["7SD3ul"]);
      }
      let obj2 = { title, hasIcons: true, value: null, onChange: null, children: null };
      let str;
      if (picked != null) {
        str = picked.id;
      }
      if (str == null) {
        str = "";
      }
      obj2.value = str;
      obj2.onChange = function onChange(arg0) {
        let tmp2 = null;
        if ("" !== arg0) {
          tmp2 = arg0;
        }
        return servers.pick(tmp2);
      };
      const obj3 = { value: "", label: null, icon: null, disabled: null };
      const intl2 = tmp10(1113).intl;
      obj3.label = intl2.string(servers(1113).t.PoWNfe);
      const obj4 = { IconComponent: servers(7639).CircleXIcon };
      obj3.icon = closure_5(servers(7465).TableRowIcon, obj4);
      obj3.disabled = servers.sharing;
      const items1 = [
        closure_5(servers(7757).TableRadioRow, obj3),
        candidates.map((guild) => {
              const obj = { value: guild.id, label: guild.name, icon: null, disabled: null };
              const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
              obj.icon = hasOwnProperty(GuildIconDefault, obj2);
              obj.disabled = servers.sharing;
              return hasOwnProperty(TableRadioRow.TableRadioRow, obj, guild.id);
            })
      ];
      obj2.children = items1;
      tmp2Result = closure_6(servers(7755).TableRadioGroup, obj2);
    }
    items[1] = tmp2Result;
    let tmp14 = null;
    if (servers.changeRows.length > 0) {
      const obj5 = { rows: servers.changeRows };
      tmp14 = closure_5(ConjureChangeListDefault, obj5);
    }
    items[2] = tmp14;
    let tmp18 = null;
    if (null != servers.error) {
      const obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: servers.error };
      tmp18 = closure_5(servers(5923).Text, obj6);
    }
    const obj7 = { children: null };
    items[3] = tmp18;
    obj7.children = items;
    let tmp = closure_6(closure_7, obj7);
  } else {
    tmp = null;
  }
  return tmp;
}
function ShareLinkRow(project) {
  project = project.project;
  const tmp = buildConjureProjectLinkDefault(project.application_id, project.name);
  _require = tmp;
  items = [tmp];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(closure_0);
    ToastUtils.presentLinkCopied();
  }, items);
  let obj = { icon: closure_5(require("TableRowIcon").TableRowIcon, { IconComponent: require("LinkIcon").LinkIcon }), label: null, subLabel: null, subLabelLineClamp: 1, disabled: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.WqhZss);
  obj.subLabel = tmp;
  obj.disabled = project.disabled;
  obj.onPress = callback;
  return closure_5(require("TableRow").TableRow, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6, Fragment: metroImportDefault } = jsxProd);
const createStyles = fn(5310);
let obj2 = { body: { gap: nativeDefault.space.PX_16 }, notice: null, noticeText: null, sharingMode: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.notice = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.noticeText = { flex: 1 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sharingMode = { marginBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareAccess.tsx");

export default function ConjureShareAccess(arg0) {
  ({ project, sharing } = arg0);
  mode = undefined;
  changeMode = undefined;
  noop = undefined;
  ({ servers, serversLabel } = arg0);
  const tmp = closure_8();
  ({ isOwner, mode } = sharing);
  const options = sharing.options;
  ({ changing, changeMode } = sharing);
  const found = options.find((value) => value.value === mode);
  noop = noop.useRef(changeMode);
  items = [changeMode];
  const effect = noop.useEffect(() => {
    closure_3.current = changeMode;
  }, items);
  const items1 = [options, mode];
  let obj = { style: tmp.body, children: null };
  const callback = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(14439, dependencyMap.paths), ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, {
      options,
      value: mode,
      onChange(AUTO_DISMISS) {
        return ref.current(AUTO_DISMISS);
      }
    }, "stack");
  }, items1);
  const items2 = [closure_5(ConjureShareServersSection, { servers, title: serversLabel }), , , , , ];
  let tmp7Result = null;
  if ("public" === mode) {
    const obj2 = { hasIcons: true, children: null };
    const obj3 = { project, disabled: changing };
    obj2.children = closure_5(ShareLinkRow, obj3);
    tmp7Result = closure_5(mode(changeMode[9]).TableRowGroup, obj2);
  }
  items2[1] = tmp7Result;
  let tmp7Result4 = null;
  if ("link" === mode) {
    const obj4 = { project, isOwner, disabled: changing };
    tmp7Result4 = closure_5(options(changeMode[10]), obj4);
  }
  items2[2] = tmp7Result4;
  const obj5 = { style: tmp.sharingMode, children: null };
  const obj7 = { label: null, subLabel: null, trailing: null, arrow: null, disabled: null, onPress: null };
  const intl = mode(changeMode[12]).intl;
  obj7.label = intl.string(options(changeMode[13]).jDBYrs);
  let stringResult;
  if (!isOwner) {
    const intl2 = tmp15(tmp16[12]).intl;
    stringResult = intl2.string(tmp17(tmp16[13]).WLBlI4);
  }
  obj7.subLabel = stringResult;
  let tmp7Result5;
  if (null != found) {
    const obj8 = { text: found.label };
    tmp7Result5 = closure_5(tmp15(tmp16[11]).TableRow.TrailingText, obj8);
  }
  obj7.trailing = tmp7Result5;
  ({ canChange: obj6.arrow, canChange } = sharing);
  let tmp20 = !canChange;
  if (canChange) {
    tmp20 = changing;
  }
  obj7.disabled = tmp20;
  obj7.onPress = callback;
  obj5.children = closure_5(mode(changeMode[9]).TableRowGroup, { hasIcons: false, children: closure_5(mode(changeMode[11]).TableRow, obj7) });
  items2[3] = closure_5(View, obj5);
  let tmp5Result = null;
  if (sharing.loadFailed) {
    tmp5Result = null;
    if (!changing) {
      tmp5Result = null;
      if ("public" !== mode) {
        const obj10 = { direction: "horizontal", spacing: tmp17(tmp16[4]).space.PX_8, align: "center", style: tmp.notice, children: null };
        const obj11 = { style: tmp.noticeText, children: null };
        const obj12 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
        const intl4 = tmp15(tmp16[12]).intl;
        obj12.children = intl4.string(tmp17(tmp16[13])["0e9nOP"]);
        obj11.children = closure_5(tmp15(tmp16[15]).Text, obj12);
        const items3 = [closure_5(View, obj11), ];
        const obj13 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp15(tmp16[12]).intl;
        obj13.text = intl5.string(tmp15(tmp16[12]).t["5911Lb"]);
        obj13.onPress = sharing.reload;
        items3[1] = closure_5(tmp15(tmp16[16]).Button, obj13);
        obj10.children = items3;
        tmp5Result = closure_6(tmp15(tmp16[14]).Stack, obj10);
      }
    }
  }
  items2[4] = tmp5Result;
  let tmp7Result6 = null;
  if (sharing.saveFailed) {
    const obj14 = { style: tmp.notice, children: null };
    const obj27 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp15(tmp16[12]).intl;
    obj27.children = intl3.string(tmp17(tmp16[13]).wzqQPR);
    obj14.children = closure_5(tmp15(tmp16[15]).Text, obj27);
    tmp7Result6 = closure_5(View, obj14);
  }
  items2[5] = tmp7Result6;
  obj.children = items2;
  return closure_6(View, obj);
};