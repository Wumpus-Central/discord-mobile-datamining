// === Module 12407: ConjurePublishSheet ===

// Module 12407 (ConjurePublishSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import TableSwitchRow from "TableSwitchRow" /* 7363 */;
import AppsIcon2 from "AppsIcon" /* 8670 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12400 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function showCriticalToast(text) {
  ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SHEET_ERROR", { text, variant: "critical" });
}
function hidePublishSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishSheet);
}
function ConjurePublishSheet(projectId) {
  projectId = projectId.projectId;
  ({ publishOptions, entryPoint } = projectId);
  const tmp = useConjurePublishActionDefault(projectId, publishOptions);
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  importDefault = tmp3;
  const items2 = [null == tmp || null == stateFromStores];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishSheet);
    }
  }, items2);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (null != stateFromStores) {
      obj2 = { project: stateFromStores, publish: tmp, entryPoint };
      tmp5 = closure_7(PublishSheetBody, obj2);
    }
  }
  return tmp5;
}
function PublishSheetBody(entryPoint) {
  ({ project, publish } = entryPoint);
  entryPoint = entryPoint.entryPoint;
  noop = undefined;
  closure_5 = undefined;
  let AppsIcon;
  closure_7 = async function _handlePublish() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (ref.current) {
            c4 = 3;
          } else {
            ref.current = true;
            c3 = 2;
            v3 = 3;
            c4 = 1;
            const obj4 = { value: dependencyMap.save(), done: false };
            return obj4;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_3.current = false;
          throw tmp36;
        } else if (2 === tmp8) {
          c3 = 1;
          const intl = tmp4(tmp36[23]).intl;
          showCriticalToast(intl.string(v3(tmp36[24]).Fi7boI));
          c3 = 0;
          closure_128_3.current = false;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_128_3.current = false;
          if (value) {
            if (closure_128_5.current) {
              hidePublishSheet();
              const appChannelsPrivate = closure_128_2.appChannelsPrivate;
              let isPrivate;
              if (appChannelsPrivate != null) {
                isPrivate = appChannelsPrivate.isPrivate;
              }
              closure_128_0.run(closure_128_1, true === isPrivate);
            }
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        c3 = 0;
        closure_128_3.current = false;
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp36) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  const tmp4 = entryPoint(12414)(project, publish);
  dependencyMap = tmp4;
  entryPoint(6017)(() => true, tmp4.saving);
  closure_3 = noop.useRef(false);
  const context = noop.useContext(entryPoint(5586));
  let transitionState;
  if (context != null) {
    transitionState = context.transitionState;
  }
  let tmp8 = null == transitionState;
  if (!tmp8) {
    tmp8 = "visible" === transitionState;
  }
  noop = tmp8;
  closure_5 = obj.useRef(tmp8);
  const items = [tmp8];
  const layoutEffect = obj.useLayoutEffect(() => {
    closure_5.current = current;
    return () => {
      closure_1_5.current = false;
    };
  }, items);
  ({ editable, identity, sharing, appChannelsPrivate } = tmp4);
  let isPrivate;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = publish(8669).AppsLockIcon;
    let tmp12 = publish;
  } else {
    AppsIcon = publish(8670).AppsIcon;
    tmp12 = publish;
  }
  if (tmp4.initial) {
    const initialChannelNames = tmp4.initialChannelNames;
    let mapped = initialChannelNames.map((label) => React5(ContentRow, { icon: AppsIcon, label }, "channel:" + label));
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => closure_7(ChannelRow, { channel }, channel.id));
  }
  const items1 = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      return closure_7(ContentRow, { icon: obj2[surface], label: label.label }, surface);
    })
  ];
  components = tmp4.components;
  obj2 = { startExpanded: editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, children: null };
  let intl = tmp12(1114).intl;
  obj2.dismissAccessibilityLabel = intl.string(entryPoint(3865).NEPcoi);
  let obj3 = { style: tmp.content, children: null };
  if (editable) {
    let obj4 = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: tmp4.saving,
      onChange: identity.setIcon,
      onError(text) {
          if (null != text) {
            obj2 = { text, variant: "critical" };
            entryPoint(5707).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
            obj = entryPoint(5707);
          }
        }
    };
    let tmp15Result = tmp15(tmp12(12420).ConjureAppIconTile, obj4);
  } else {
    const obj5 = { project, size: "dialog" };
    tmp15Result = tmp15(tmp2(12425), obj5);
  }
  const items2 = [tmp15Result, , , , , , ];
  if (editable) {
    const obj6 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
    const intl2 = tmp12(1114).intl;
    obj6.label = intl2.string(tmp2(3865).knevPu);
    ({ name: obj9.value, setName: obj9.onChange } = tmp4);
    obj6.maxLength = tmp12(6839).MAX_PROJECT_NAME_LENGTH;
    ({ saving: obj9.disabled, nameError } = tmp4);
    const obj7 = { children: null };
    obj6.errorMessage = nameError;
    const items3 = [tmp15(tmp12(7076).TextInput, obj6), ];
    const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl3 = tmp12(1114).intl;
    obj8.label = intl3.string(tmp2(3865).ynaGa1);
    const intl4 = tmp12(1114).intl;
    obj8.placeholder = intl4.string(tmp2(3865)["I+3UTL"]);
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    obj8.maxLength = tmp12(6839).MAX_APP_DESCRIPTION_LENGTH;
    obj8.disabled = tmp4.saving;
    items3[1] = tmp15(tmp12(7247).TextArea, obj8);
    obj7.children = items3;
    let tmp16Result = closure_9(closure_8, obj7);
  } else {
    const obj10 = { style: tmp.nameGroup, children: null };
    const obj12 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
    const items4 = [tmp15(tmp12(5619).Text, obj12), ];
    let tmp15Result6 = null;
    if ("" !== tmp4.description) {
      const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp15Result6 = tmp15(tmp12(5619).Text, obj13);
    }
    items4[1] = tmp15Result6;
    obj10.children = items4;
    tmp16Result = closure_9(tmp17, obj10);
  }
  items2[1] = tmp16Result;
  const obj14 = { title: null, rows: null };
  const intl5 = tmp12(1114).intl;
  obj14.title = intl5.string(entryPoint(3865).BqNMms);
  obj14.rows = items1;
  items2[2] = closure_7(RowSection, obj14);
  let tmp15Result7 = null;
  if (null != appChannelsPrivate) {
    const obj15 = { channelCount: tmp4.initialChannelNames.length, appChannelsPrivate, disabled: tmp4.saving };
    tmp15Result7 = tmp15(AppChannelsPrivateSection, obj15);
  }
  items2[3] = tmp15Result7;
  const obj16 = { title: null, following: null, rows: null };
  const intl6 = tmp12(1114).intl;
  obj16.title = intl6.string(entryPoint(3865).LnqeFd);
  obj16.following = items1.length > 0 && null == appChannelsPrivate;
  const devicePermissions = tmp4.devicePermissions;
  obj16.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_11[item], label: null };
    const intl = publish(1114).intl;
    obj.label = intl.string(publish(12414).CONJURE_PUBLISH_PERMISSION_LABELS[item]);
    return closure_7(ContentRow, obj, item);
  });
  items2[4] = closure_7(RowSection, obj16);
  let tmp16Result2 = null;
  if (null != sharing) {
    const obj17 = { title: null };
    const intl7 = tmp12(1114).intl;
    obj17.title = intl7.string(tmp2(3865).esTM8y);
    const items5 = [tmp15(SectionTitle, obj17), ];
    const obj18 = { style: tmp.sharingRow, children: null };
    if (null != sharing.guild) {
      const obj19 = { guild: sharing.guild, size: tmp12(6951).GuildIconSizes.SMALL_36 };
      let tmp15Result8 = tmp15(tmp2(6951), obj19);
      const tmp2Result = tmp2(6951);
    } else {
      const obj20 = { style: tmp.onlyMeIcon, children: null };
      const obj21 = { size: "xs", color: tmp2(575).colors.ICON_DEFAULT };
      obj20.children = tmp15(tmp12(12431).UserIcon, obj21);
      tmp15Result8 = tmp15(tmp17, obj20);
    }
    const items6 = [tmp15Result8, ];
    const obj22 = { style: tmp.rowText, children: null };
    const guild = sharing.guild;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl8 = tmp12(1114).intl;
      name = intl8.string(tmp2(3865)["37xgkF"]);
    }
    const obj23 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    const items7 = [tmp15(tmp12(5619).Text, obj23), ];
    let tmp15Result9 = null;
    if (null != sharing.caption) {
      const obj24 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp15Result9 = tmp15(tmp12(5619).Text, obj24);
    }
    const obj25 = { children: null };
    items7[1] = tmp15Result9;
    obj22.children = items7;
    items6[1] = closure_9(tmp17, obj22);
    obj18.children = items6;
    items5[1] = closure_9(tmp17, obj18);
    obj25.children = items5;
    tmp16Result2 = closure_9(tmp17, obj25);
  }
  items2[5] = tmp16Result2;
  const obj26 = { style: tmp.footer, children: null };
  let tmp15Result10 = null;
  if (null != tmp4.note) {
    const obj27 = { variant: "text-sm/normal", color: "text-subtle", children: tmp4.note };
    tmp15Result10 = tmp15(tmp12(5619).Text, obj27);
  }
  const items8 = [tmp15Result10, ];
  const obj28 = { style: tmp.actions, children: null };
  const obj55 = { variant: "secondary", size: "md", grow: true, text: null, disabled: null, onPress: null };
  const intl9 = tmp12(1114).intl;
  obj55.text = intl9.string(tmp12(1114).t["ETE/oC"]);
  obj55.disabled = tmp4.saving;
  obj55.onPress = hidePublishSheet;
  const items9 = [closure_7(tmp12(5629).Button, obj55), ];
  const obj56 = { variant: "primary", size: "md", grow: true, text: publish.label, disabled: null, loading: null, onPress: null };
  let disabled = publish.disabled;
  if (!disabled) {
    disabled = null != tmp4.nameError;
  }
  obj56.disabled = disabled;
  obj56.loading = tmp4.saving;
  obj56.onPress = function handlePublish() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items9[1] = closure_7(tmp12(5629).Button, obj56);
  obj28.children = items9;
  items8[1] = closure_9(closure_5, obj28);
  obj26.children = items8;
  items2[6] = closure_9(closure_5, obj26);
  obj3.children = items2;
  obj2.children = closure_9(closure_5, obj3);
  return closure_7(tmp12(7360).ActionSheet, obj2);
}
function SectionTitle(children) {
  const tmp = closure_13();
  return React5(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_13().sectionTitle, children: children.title });
}
function RowSection(title) {
  ({ rows, following } = title);
  if (following === undefined) {
    following = false;
  }
  let tmp3Result = null;
  if (0 !== rows.length) {
    if (following) {
      following = tmp.followingSection;
    }
    obj = { style: following, children: null };
    obj2 = { title: title.title };
    const items = [React5(SectionTitle, obj2), rows];
    obj.children = items;
    tmp3Result = React7(View, obj);
  }
  return tmp3Result;
}
function ContentRow(arg0) {
  ({ icon, label } = arg0);
  obj = { style: closure_13().row, children: null };
  const items = [React5(icon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }), React5(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: label })];
  obj.children = items;
  return React7(View, obj);
}
function AppChannelsPrivateSection(appChannelsPrivate) {
  appChannelsPrivate = appChannelsPrivate.appChannelsPrivate;
  const isPrivate = appChannelsPrivate.isPrivate;
  ({ channelCount, disabled } = appChannelsPrivate);
  let str = "text-muted";
  if (isPrivate) {
    str = "text-default";
  }
  obj = { start: true, end: true, label: null, value: null, disabled: null, onValueChange: null };
  obj2 = { variant: "text-md/medium", color: str, children: null };
  const intl = util.intl;
  obj2.children = intl.formatToPlainString(_modDef3865.Td1mlg, { count: channelCount });
  obj.label = React5(Text_Text.Text, obj2);
  obj.value = isPrivate;
  obj.disabled = disabled;
  obj.onValueChange = appChannelsPrivate.setPrivate;
  return React5(TableSwitchRow.TableSwitchRow, obj);
}
function ChannelRow(channel) {
  obj = { icon: AppsIcon2.AppsIcon, label: null };
  let str = useChannelNameDefault(channel.channel);
  if (str == null) {
    str = "";
  }
  obj.label = str;
  return React5(ContentRow, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
ConjurePublishSheet = "ConjurePublishSheet";
let obj = { screen_capture: fn(9565).ScreenIcon, connect_user_to_voice: fn(8665).VoiceNormalIcon };
let obj2 = {};
obj2[fn(6839).ConjureSupportedSurface.BOT] = fn(12408).RobotIcon;
obj2[fn(6839).ConjureSupportedSurface.ACTIVITY] = fn(12410).ActivitiesIcon;
obj2[fn(6839).ConjureSupportedSurface.PROFILE_WIDGET] = fn(12412).BadgeIcon;
obj2[fn(6839).ConjureSupportedSurface.AUTOMOD] = fn(11255).ShieldIcon;
const createStyles = fn(5009);
let obj4 = { content: { gap: nativeDefault.space.PX_16 }, nameGroup: null, sectionTitle: null, followingSection: null, row: null, sharingRow: null, onlyMeIcon: null, rowText: null, footer: null, actions: null };
let obj5 = { gap: nativeDefault.space.PX_16 };
obj4.nameGroup = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj4.sectionTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj4.followingSection = { marginTop: -nativeDefault.space.PX_8 };
let obj8 = { marginTop: -nativeDefault.space.PX_8 };
obj4.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
const obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj4.sharingRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
obj4.onlyMeIcon = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj4.rowText = { flex: 1 };
const obj11 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj4.footer = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj12 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj4.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  obj2 = { key: ConjurePublishSheet, content: null };
  const merged = Object.assign(arg0);
  obj2.content = React5(ConjurePublishSheet, {});
  ActionSheetActionCreators.showActionSheet(obj2);
};