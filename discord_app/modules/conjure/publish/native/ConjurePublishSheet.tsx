// === Module 12192: ConjurePublishSheet ===

// Module 12192 (ConjurePublishSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5246 */;
import Text_Text from "Text/Text" /* 5270 */;
import useChannelNameDefault from "useChannelName" /* 5640 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import AppsIcon2 from "AppsIcon" /* 8614 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11803 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function showCriticalToast(text) {
  ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SHEET_ERROR", { text, variant: "critical" });
}
function hidePublishSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishSheet);
}
function PublishSheetBody(entryPoint) {
  ({ project, publish } = entryPoint);
  entryPoint = entryPoint.entryPoint;
  noop = undefined;
  closure_5 = undefined;
  closure_6 = async function _handlePublish() {
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
        return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
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
  const tmp4 = entryPoint(12199)(project, publish);
  dependencyMap = tmp4;
  entryPoint(6008)(() => true, tmp4.saving);
  closure_3 = noop.useRef(false);
  const context = noop.useContext(entryPoint(5616));
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
  if (tmp4.initial) {
    if (tmp4.initialChannelNames.length > 0) {
      obj2 = { channelNames: tmp4.initialChannelNames, appChannelsPrivate, disabled: tmp4.saving };
      appChannelsPrivate = [closure_7(closure_21, obj2, "app-channels")];
      let items1 = appChannelsPrivate;
    } else {
      items1 = [];
    }
  } else {
    const channels = tmp4.channels;
    const mapped = channels.map((channel) => closure_1_7(closure_1_22, { channel }, channel.id));
    const items2 = [];
    const components = tmp4.components;
    HermesBuiltin.arraySpread(components.map((label) => {
      const surface = label.surface;
      return closure_1_7(closure_1_20, { icon: obj2[surface], label: label.label }, surface);
    }), HermesBuiltin.arraySpread(mapped, 0));
    let obj3 = { startExpanded: editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, children: null };
    let intl = publish(1125).intl;
    obj3.dismissAccessibilityLabel = intl.string(tmp2(3863).NEPcoi);
    let obj4 = { style: tmp.content, children: null };
    if (editable) {
      const obj5 = {
        iconURL: identity.iconURL,
        size: 48,
        radius: 12,
        disabled: tmp4.saving,
        onChange: identity.setIcon,
        onError(text) {
              if (null != text) {
                obj2 = { text, variant: "critical" };
                entryPoint(5699).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
                obj = entryPoint(5699);
              }
            }
      };
      let tmp19Result = closure_7(publish(12205).ConjureAppIconTile, obj5);
    } else {
      const obj6 = { project, size: "dialog" };
      tmp19Result = closure_7(tmp2(12210), obj6);
    }
    const items3 = [tmp19Result, , , , , ];
    if (editable) {
      const obj7 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
      const intl2 = publish(1125).intl;
      obj7.label = intl2.string(tmp2(3863).knevPu);
      ({ name: obj10.value, setName: obj10.onChange } = tmp4);
      obj7.maxLength = publish(6809).MAX_PROJECT_NAME_LENGTH;
      ({ saving: obj10.disabled, nameError } = tmp4);
      const obj8 = { children: null };
      obj7.errorMessage = nameError;
      const items4 = [closure_7(publish(7044).TextInput, obj7), ];
      const obj9 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
      const intl3 = publish(1125).intl;
      obj9.label = intl3.string(tmp2(3863).ynaGa1);
      const intl4 = publish(1125).intl;
      obj9.placeholder = intl4.string(tmp2(3863)["I+3UTL"]);
      ({ description: obj12.value, setDescription: obj12.onChange } = identity);
      obj9.maxLength = publish(6809).MAX_APP_DESCRIPTION_LENGTH;
      obj9.disabled = tmp4.saving;
      items4[1] = closure_7(publish(7216).TextArea, obj9);
      obj8.children = items4;
      let tmp21Result = closure_9(closure_8, obj8);
    } else {
      const obj11 = { style: tmp.nameGroup, children: null };
      const obj13 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
      const items5 = [closure_7(publish(5270).Text, obj13), ];
      let tmp19Result4 = null;
      if ("" !== tmp4.description) {
        const obj14 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
        tmp19Result4 = closure_7(publish(5270).Text, obj14);
      }
      items5[1] = tmp19Result4;
      obj11.children = items5;
      tmp21Result = closure_9(tmp22, obj11);
    }
    items3[1] = tmp21Result;
    const obj15 = { title: null, rows: null };
    const intl5 = publish(1125).intl;
    obj15.title = intl5.string(tmp2(3863).BqNMms);
    obj15.rows = items2;
    items3[2] = closure_7(closure_19, obj15);
    const obj16 = { title: null, following: null, rows: null };
    const intl6 = publish(1125).intl;
    obj16.title = intl6.string(tmp2(3863).LnqeFd);
    obj16.following = items2.length > 0;
    const devicePermissions = tmp4.devicePermissions;
    obj16.rows = devicePermissions.map((item) => {
      obj = { icon: closure_1_11[item], label: null };
      const intl = publish(1125).intl;
      obj.label = intl.string(publish(12199).CONJURE_PUBLISH_PERMISSION_LABELS[item]);
      return closure_1_7(closure_1_20, obj, item);
    });
    items3[3] = closure_7(closure_19, obj16);
    let tmp21Result2 = null;
    if (null != sharing) {
      const obj17 = { title: null };
      const intl7 = publish(1125).intl;
      obj17.title = intl7.string(tmp2(3863).esTM8y);
      const items6 = [closure_7(closure_18, obj17), ];
      const obj18 = { style: tmp.sharingRow, children: null };
      if (null != sharing.guild) {
        const obj19 = { guild: sharing.guild, size: publish(6919).GuildIconSizes.SMALL_36 };
        let tmp19Result5 = closure_7(tmp2(6919), obj19);
        const tmp2Result = tmp2(6919);
      } else {
        const obj20 = { style: tmp.onlyMeIcon, children: null };
        const obj21 = { size: "xs", color: tmp2(587).colors.ICON_DEFAULT };
        obj20.children = closure_7(publish(12214).UserIcon, obj21);
        tmp19Result5 = closure_7(tmp22, obj20);
      }
      const items7 = [tmp19Result5, ];
      const obj22 = { style: tmp.rowText, children: null };
      guild = sharing.guild;
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (name == null) {
        const intl8 = publish(1125).intl;
        name = intl8.string(tmp2(3863)["37xgkF"]);
      }
      const obj23 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
      const items8 = [closure_7(publish(5270).Text, obj23), ];
      let tmp19Result6 = null;
      if (null != sharing.caption) {
        const obj24 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
        tmp19Result6 = closure_7(publish(5270).Text, obj24);
      }
      const obj25 = { children: null };
      items8[1] = tmp19Result6;
      obj22.children = items8;
      items7[1] = closure_9(tmp22, obj22);
      obj18.children = items7;
      items6[1] = closure_9(tmp22, obj18);
      obj25.children = items6;
      tmp21Result2 = closure_9(tmp22, obj25);
    }
    items3[4] = tmp21Result2;
    const obj26 = { style: tmp.footer, children: null };
    const obj27 = { variant: "text-sm/normal", color: "text-subtle", children: tmp4.note };
    const items9 = [closure_7(publish(5270).Text, obj27), ];
    const obj55 = { style: tmp.actions, children: null };
    const obj56 = { variant: "secondary", size: "md", grow: true, text: null, disabled: null, onPress: null };
    const intl9 = publish(1125).intl;
    obj56.text = intl9.string(publish(1125).t["ETE/oC"]);
    obj56.disabled = tmp4.saving;
    obj56.onPress = hidePublishSheet;
    const items10 = [closure_7(publish(5280).Button, obj56), ];
    const obj57 = { variant: "primary", size: "md", grow: true, text: null, disabled: null, loading: null, onPress: null };
    ({ label: obj28.text, disabled } = publish);
    if (!disabled) {
      disabled = null != tmp4.nameError;
    }
    obj57.disabled = disabled;
    obj57.loading = tmp4.saving;
    obj57.onPress = function handlePublish() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items10[1] = closure_7(publish(5280).Button, obj57);
    obj55.children = items10;
    items9[1] = closure_9(closure_5, obj55);
    obj26.children = items9;
    items3[5] = closure_9(closure_5, obj26);
    obj4.children = items3;
    obj3.children = closure_9(closure_5, obj4);
    return closure_7(publish(7334).ActionSheet, obj3);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const ConjurePublishSheet = "ConjurePublishSheet";
let obj = { screen_capture: fn(9514).ScreenIcon, connect_user_to_voice: fn(8609).VoiceNormalIcon };
let obj2 = {};
obj2[fn(6809).ConjureSupportedSurface.BOT] = fn(12193).RobotIcon;
obj2[fn(6809).ConjureSupportedSurface.ACTIVITY] = fn(12195).ActivitiesIcon;
obj2[fn(6809).ConjureSupportedSurface.PROFILE_WIDGET] = fn(12197).BadgeIcon;
obj2[fn(6809).ConjureSupportedSurface.AUTOMOD] = fn(10992).ShieldIcon;
const createStyles = fn(5004);
let obj4 = { content: { gap: nativeDefault.space.PX_16 }, nameGroup: null, sectionTitle: null, followingSection: null, row: null, sharingRow: null, onlyMeIcon: null, rowText: null, appChannelsPrivate: null, footer: null, actions: null };
let obj5 = { gap: nativeDefault.space.PX_16 };
obj4.nameGroup = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj4.sectionTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj4.followingSection = { marginTop: -nativeDefault.space.PX_8 };
let obj8 = { marginTop: -nativeDefault.space.PX_8 };
obj4.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj4.sharingRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
const obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
obj4.onlyMeIcon = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj4.rowText = { flex: 1 };
let obj11 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj4.appChannelsPrivate = { marginTop: nativeDefault.space.PX_12 };
const obj12 = { marginTop: nativeDefault.space.PX_12 };
obj4.footer = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj13 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj4.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishSheet(projectId) {
  const cResult = projectId(576).c(11);
  projectId = projectId.projectId;
  const entryPoint = projectId.entryPoint;
  const tmp4 = useConjurePublishActionDefault(projectId, projectId.publishOptions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function s() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  obj = projectId(576);
  const stateFromStores = projectId(504).useStateFromStores(first, tmp7, tmp8);
  importDefault = tmp10;
  if (cResult[4] !== (null == tmp4 || null == stateFromStores)) {
    const fn2 = function x() {
      if (closure_1) {
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishSheet);
      }
    };
    const items2 = [tmp10];
    cResult[4] = tmp10;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp12 = items2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const effect = noop.useEffect(tmp11, tmp12);
  if (cResult[7] === entryPoint) {
    if (cResult[8] === stateFromStores) {
      if (cResult[9] === tmp4) {
        let tmp14 = cResult[10];
      }
      return tmp14;
    }
  }
  let tmp15 = null;
  if (null != tmp4) {
    tmp15 = null;
    if (null != stateFromStores) {
      obj2 = { project: stateFromStores, publish: tmp4, entryPoint };
      tmp15 = closure_7(PublishSheetBody, obj2);
    }
  }
  cResult[7] = entryPoint;
  cResult[8] = stateFromStores;
  cResult[9] = tmp4;
  cResult[10] = tmp15;
  tmp14 = tmp15;
  const tmpResult = projectId(504);
}) : (function ConjurePublishSheet(projectId) {
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
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function SectionTitle(title) {
  const cResult = c.c(3);
  title = title.title;
  const tmp4 = closure_13();
  if (cResult[0] === tmp4.sectionTitle) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = React5(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: tmp4.sectionTitle, children: title });
  cResult[0] = tmp4.sectionTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  obj2 = { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: tmp4.sectionTitle, children: title };
}) : (function SectionTitle(children) {
  const tmp = closure_13();
  return React5(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_13().sectionTitle, children: children.title });
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function RowSection(arg0) {
  const cResult = c.c(6);
  ({ title, rows, following } = arg0);
  let followingSection = undefined !== following && following;
  if (0 === rows.length) {
    return null;
  } else {
    if (followingSection) {
      followingSection = tmp2.followingSection;
    }
    if (cResult[0] !== title) {
      obj2 = { title };
      const tmp6 = React5(closure_18, obj2);
      cResult[0] = title;
      cResult[1] = tmp6;
      let tmp3 = tmp6;
    } else {
      tmp3 = cResult[1];
    }
    if (cResult[2] === rows) {
      if (cResult[3] === followingSection) {
        if (cResult[4] === tmp3) {
          let tmp7 = cResult[5];
        }
        return tmp7;
      }
    }
    const obj3 = { style: followingSection, children: null };
    const items = [tmp3, rows];
    obj3.children = items;
    const tmp10 = React6(View, obj3);
    cResult[2] = rows;
    cResult[3] = followingSection;
    cResult[4] = tmp3;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
}) : (function RowSection(title) {
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
    const items = [React5(closure_18, obj2), rows];
    obj.children = items;
    tmp3Result = React6(View, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentRow(arg0) {
  const cResult = c.c(8);
  ({ icon, label } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== icon) {
    obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const tmp8 = React5(icon, obj2);
    cResult[0] = icon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== label) {
    const obj3 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label };
    const tmp11 = React5(Text_Text.Text, obj3);
    cResult[2] = label;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.row) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp9) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.row, children: null };
  const items = [tmp5, tmp9];
  obj4.children = items;
  const tmp13 = React6(View, obj4);
  cResult[4] = tmp4.row;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function ContentRow(arg0) {
  ({ icon, label } = arg0);
  obj = { style: closure_13().row, children: null };
  const items = [React5(icon, { size: "xs", color: nativeDefault.colors.ICON_MUTED }), React5(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label })];
  obj.children = items;
  return React6(View, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannelList(arg0) {
  const cResult = require("c").c(16);
  ({ channelNames, appChannelsPrivate, disabled } = arg0);
  const tmp4 = closure_13();
  _require = tmp4;
  let isPrivate;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    let AppsIcon = tmp(8613).AppsLockIcon;
  } else {
    AppsIcon = tmp(8614).AppsIcon;
  }
  if (cResult[0] === AppsIcon) {
    if (cResult[1] === channelNames) {
      if (cResult[2] === tmp4) {
        if (cResult[7] === appChannelsPrivate) {
          if (cResult[8] === channelNames.length) {
            if (cResult[9] === disabled) {
              if (cResult[10] === tmp6) {
                if (cResult[11] === tmp4) {
                  let tmp11 = cResult[12];
                }
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp11) {
                    let tmp16 = cResult[15];
                  }
                  return tmp16;
                }
                obj2 = { children: null };
                let items = [tmp7, tmp11];
                obj2.children = items;
                const tmp19 = closure_9(View, obj2);
                cResult[13] = tmp7;
                cResult[14] = tmp11;
                cResult[15] = tmp19;
                tmp16 = tmp19;
              }
            }
          }
        }
        let tmp13Result = null;
        if (null != appChannelsPrivate) {
          const obj3 = { style: tmp4.appChannelsPrivate, children: null };
          let str = "text-muted";
          if (tmp6) {
            str = "text-default";
          }
          const obj4 = { start: true, end: true, label: null, value: null, disabled: null, onValueChange: null };
          const obj5 = { variant: "text-md/medium", color: str, children: null };
          const intl = tmp(1125).intl;
          const obj6 = { count: channelNames.length };
          obj5.children = intl.formatToPlainString(AppsIcon(3863).Td1mlg, obj6);
          obj4.label = closure_7(tmp(5270).Text, obj5);
          obj4.value = tmp6;
          obj4.disabled = disabled;
          obj4.onValueChange = appChannelsPrivate.setPrivate;
          obj3.children = closure_7(tmp(7331).TableSwitchRow, obj4);
          tmp13Result = closure_7(View, obj3);
        }
        cResult[7] = appChannelsPrivate;
        cResult[8] = channelNames.length;
        cResult[9] = disabled;
        cResult[10] = tmp6;
        cResult[11] = tmp4;
        cResult[12] = tmp13Result;
        tmp11 = tmp13Result;
      }
    }
  }
  if (cResult[4] === AppsIcon) {
    if (cResult[5] === tmp4) {
      let tmp8 = cResult[6];
    }
    const mapped = channelNames.map(tmp8);
    cResult[0] = AppsIcon;
    cResult[1] = channelNames;
    cResult[2] = tmp4;
    cResult[3] = mapped;
  }
  const fn = function o(children) {
    obj = { style: row.row, children: null };
    const items = [React5(AppsIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }), React5(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children })];
    obj.children = items;
    return React6(View, obj, children);
  };
  cResult[4] = AppsIcon;
  cResult[5] = tmp4;
  cResult[6] = fn;
  tmp8 = fn;
  obj = require("c");
}) : (function AppChannelList(disabled) {
  ({ channelNames, appChannelsPrivate } = disabled);
  let AppsIcon;
  const tmp = closure_13();
  const row = tmp;
  let isPrivate;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = tmp4(8613).AppsLockIcon;
    let tmp7 = tmp4;
  } else {
    AppsIcon = tmp4(8614).AppsIcon;
    tmp7 = tmp4;
  }
  const children = [
    channelNames.map((children) => {
      obj = { style: row.row, children: null };
      const items = [React5(AppsIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }), React5(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children })];
      obj.children = items;
      return React6(View, obj, children);
    }),

  ];
  let tmp11Result = null;
  if (null != appChannelsPrivate) {
    obj = { style: tmp.appChannelsPrivate, children: null };
    let str = "text-muted";
    if (tmp3) {
      str = "text-default";
    }
    obj2 = { start: true, end: true, label: null, value: null, disabled: null, onValueChange: null };
    const obj3 = { variant: "text-md/medium", color: str, children: null };
    const intl = tmp7(1125).intl;
    const obj4 = { count: channelNames.length };
    obj3.children = intl.formatToPlainString(AppsIcon(3863).Td1mlg, obj4);
    obj2.label = closure_7(tmp7(5270).Text, obj3);
    obj2.value = tmp3;
    obj2.disabled = disabled.disabled;
    obj2.onValueChange = appChannelsPrivate.setPrivate;
    obj.children = closure_7(tmp7(7331).TableSwitchRow, obj2);
    tmp11Result = closure_7(View, obj);
  }
  children[1] = tmp11Result;
  return closure_9(View, { children });
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(channel) {
  const cResult = c.c(2);
  let str = useChannelNameDefault(channel.channel);
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    obj2 = { icon: AppsIcon2.AppsIcon, label: str };
    const tmp7 = React5(closure_20, obj2);
    cResult[0] = str;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ChannelRow(channel) {
  obj = { icon: AppsIcon2.AppsIcon, label: null };
  let str = useChannelNameDefault(channel.channel);
  if (str == null) {
    str = "";
  }
  obj.label = str;
  return React5(closure_20, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  obj2 = { key: ConjurePublishSheet, content: null };
  const merged = Object.assign(arg0);
  obj2.content = React5(closure_16, {});
  ActionSheetActionCreators.showActionSheet(obj2);
};