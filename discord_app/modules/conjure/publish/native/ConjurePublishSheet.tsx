// discord_app/modules/conjure/publish/native/ConjurePublishSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3864 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import AppsIcon2 from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import useConjurePublishActionDefault from "../useConjurePublishAction.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

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
        return { value: "IconComponent", done: "IconComponent" };
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
          const intl = tmp4(tmp36[25]).intl;
          showCriticalToast(intl.string(v3(tmp36[26]).Fi7boI));
          c3 = 0;
          closure_128_3.current = false;
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
            return { value: "IconComponent", done: "IconComponent" };
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
  const tmp4 = entryPoint(12253)(project, publish);
  dependencyMap = tmp4;
  entryPoint(6010)(() => true, tmp4.saving);
  closure_3 = noop.useRef(false);
  const context = noop.useContext(entryPoint(5617));
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
    AppsIcon = publish(8635).AppsLockIcon;
    let tmp12 = publish;
  } else {
    AppsIcon = publish(8636).AppsIcon;
    tmp12 = publish;
  }
  if (tmp4.initial) {
    const initialChannelNames = tmp4.initialChannelNames;
    let mapped = initialChannelNames.map((label) => React5(closure_20, { icon: AppsIcon, label }, "channel:" + label));
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => closure_7(closure_1_22, { channel }, channel.id));
  }
  const items1 = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      return closure_7(closure_1_20, { icon: obj2[surface], label: label.label }, surface);
    }),
  ];
  components = tmp4.components;
  obj2 = {
    startExpanded: editable,
    keyboardShouldPersistTaps: "handled",
    dismissAccessibilityLabel: null,
    children: null,
  };
  let intl = tmp12(1125).intl;
  obj2.dismissAccessibilityLabel = intl.string(entryPoint(3864).NEPcoi);
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
          entryPoint(5701).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          obj = entryPoint(5701);
        }
      },
    };
    let tmp15Result = tmp15(tmp12(12259).ConjureAppIconTile, obj4);
  } else {
    const obj5 = { project, size: "dialog" };
    tmp15Result = tmp15(tmp2(12264), obj5);
  }
  const items2 = [tmp15Result, , , , , ,];
  if (editable) {
    const obj6 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
    const intl2 = tmp12(1125).intl;
    obj6.label = intl2.string(tmp2(3864).knevPu);
    ({ name: obj9.value, setName: obj9.onChange } = tmp4);
    obj6.maxLength = tmp12(6832).MAX_PROJECT_NAME_LENGTH;
    ({ saving: obj9.disabled, nameError } = tmp4);
    const obj7 = { children: null };
    obj6.errorMessage = nameError;
    const items3 = [tmp15(tmp12(7068).TextInput, obj6)];
    const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl3 = tmp12(1125).intl;
    obj8.label = intl3.string(tmp2(3864).ynaGa1);
    const intl4 = tmp12(1125).intl;
    obj8.placeholder = intl4.string(tmp2(3864)["I+3UTL"]);
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    obj8.maxLength = tmp12(6832).MAX_APP_DESCRIPTION_LENGTH;
    obj8.disabled = tmp4.saving;
    items3[1] = tmp15(tmp12(7240).TextArea, obj8);
    obj7.children = items3;
    let tmp16Result = closure_9(closure_8, obj7);
  } else {
    const obj10 = { style: tmp.nameGroup, children: null };
    const obj12 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
    const items4 = [tmp15(tmp12(5271).Text, obj12)];
    let tmp15Result6 = null;
    if ("" !== tmp4.description) {
      const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp15Result6 = tmp15(tmp12(5271).Text, obj13);
    }
    items4[1] = tmp15Result6;
    obj10.children = items4;
    tmp16Result = closure_9(tmp17, obj10);
  }
  items2[1] = tmp16Result;
  const obj14 = { title: null, rows: null };
  const intl5 = tmp12(1125).intl;
  obj14.title = intl5.string(entryPoint(3864).BqNMms);
  obj14.rows = items1;
  items2[2] = closure_7(closure_19, obj14);
  let tmp15Result7 = null;
  if (null != appChannelsPrivate) {
    const obj15 = { channelCount: tmp4.initialChannelNames.length, appChannelsPrivate, disabled: tmp4.saving };
    tmp15Result7 = tmp15(closure_21, obj15);
  }
  items2[3] = tmp15Result7;
  const obj16 = { title: null, following: null, rows: null };
  const intl6 = tmp12(1125).intl;
  obj16.title = intl6.string(entryPoint(3864).LnqeFd);
  obj16.following = items1.length > 0 && null == appChannelsPrivate;
  const devicePermissions = tmp4.devicePermissions;
  obj16.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_11[item], label: null };
    const intl = publish(1125).intl;
    obj.label = intl.string(publish(12253).CONJURE_PUBLISH_PERMISSION_LABELS[item]);
    return closure_7(closure_1_20, obj, item);
  });
  items2[4] = closure_7(closure_19, obj16);
  let tmp16Result2 = null;
  if (null != sharing) {
    const obj17 = { title: null };
    const intl7 = tmp12(1125).intl;
    obj17.title = intl7.string(tmp2(3864).esTM8y);
    const items5 = [tmp15(closure_18, obj17)];
    const obj18 = { style: tmp.sharingRow, children: null };
    if (null != sharing.guild) {
      const obj19 = { guild: sharing.guild, size: tmp12(6943).GuildIconSizes.SMALL_36 };
      let tmp15Result8 = tmp15(tmp2(6943), obj19);
      const tmp2Result = tmp2(6943);
    } else {
      const obj20 = { style: tmp.onlyMeIcon, children: null };
      const obj21 = { size: "xs", color: tmp2(587).colors.ICON_DEFAULT };
      obj20.children = tmp15(tmp12(12268).UserIcon, obj21);
      tmp15Result8 = tmp15(tmp17, obj20);
    }
    const items6 = [tmp15Result8];
    const obj22 = { style: tmp.rowText, children: null };
    guild = sharing.guild;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl8 = tmp12(1125).intl;
      name = intl8.string(tmp2(3864)["37xgkF"]);
    }
    const obj23 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    const items7 = [tmp15(tmp12(5271).Text, obj23)];
    let tmp15Result9 = null;
    if (null != sharing.caption) {
      const obj24 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp15Result9 = tmp15(tmp12(5271).Text, obj24);
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
    tmp15Result10 = tmp15(tmp12(5271).Text, obj27);
  }
  const items8 = [tmp15Result10];
  const obj28 = { style: tmp.actions, children: null };
  const obj55 = { variant: "secondary", size: "md", grow: true, text: null, disabled: null, onPress: null };
  const intl9 = tmp12(1125).intl;
  obj55.text = intl9.string(tmp12(1125).t["ETE/oC"]);
  obj55.disabled = tmp4.saving;
  obj55.onPress = hidePublishSheet;
  const items9 = [closure_7(tmp12(5281).Button, obj55)];
  const obj56 = {
    variant: "primary",
    size: "md",
    grow: true,
    text: publish.label,
    disabled: null,
    loading: null,
    onPress: null,
  };
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
  items9[1] = closure_7(tmp12(5281).Button, obj56);
  obj28.children = items9;
  items8[1] = closure_9(closure_5, obj28);
  obj26.children = items8;
  items2[6] = closure_9(closure_5, obj26);
  obj3.children = items2;
  obj2.children = closure_9(closure_5, obj3);
  return closure_7(tmp12(7358).ActionSheet, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const ConjurePublishSheet = "ConjurePublishSheet";
let obj = { screen_capture: fn(9546).ScreenIcon, connect_user_to_voice: fn(8631).VoiceNormalIcon };
let obj2 = {};
obj2[fn(6832).ConjureSupportedSurface.BOT] = fn(12247).RobotIcon;
obj2[fn(6832).ConjureSupportedSurface.ACTIVITY] = fn(12249).ActivitiesIcon;
obj2[fn(6832).ConjureSupportedSurface.PROFILE_WIDGET] = fn(12251).BadgeIcon;
obj2[fn(6832).ConjureSupportedSurface.AUTOMOD] = fn(11027).ShieldIcon;
const createStyles = fn(5005);
let obj4 = {
  content: { gap: nativeDefault.space.PX_16 },
  nameGroup: null,
  sectionTitle: null,
  followingSection: null,
  row: null,
  sharingRow: null,
  onlyMeIcon: null,
  rowText: null,
  footer: null,
  actions: null,
};
let obj5 = { gap: nativeDefault.space.PX_16 };
obj4.nameGroup = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj4.sectionTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj4.followingSection = { marginTop: -nativeDefault.space.PX_8 };
let obj8 = { marginTop: -nativeDefault.space.PX_8 };
obj4.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4,
};
const obj9 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4,
};
obj4.sharingRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
};
let obj10 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
};
obj4.onlyMeIcon = {
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj4.rowText = { flex: 1 };
const obj11 = {
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj4.footer = {
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj12 = {
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj4.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishSheet(projectId) {
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
        class C {
          constructor() {
            if (closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[15]);
              tmp3 = ConjurePublishSheet;
              hideActionSheetResult = obj.hideActionSheet(ConjurePublishSheet);
            }
            return;
          }
        }
        const items2 = [tmp10];
        cResult[4] = tmp10;
        cResult[5] = C;
        cResult[6] = items2;
        let tmp12 = items2;
      } else {
        class C {
          constructor() {
            if (closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[15]);
              tmp3 = ConjurePublishSheet;
              hideActionSheetResult = obj.hideActionSheet(ConjurePublishSheet);
            }
            return;
          }
        }
        tmp12 = cResult[6];
      }
      const effect = noop.useEffect(C, tmp12);
      if (cResult[7] === entryPoint) {
        class C {
          constructor() {
            if (closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[15]);
              tmp3 = ConjurePublishSheet;
              hideActionSheetResult = obj.hideActionSheet(ConjurePublishSheet);
            }
            return;
          }
        }
      }
      let tmp14 = null;
      if (null != tmp4) {
        class C {
          constructor() {
            if (closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[15]);
              tmp3 = ConjurePublishSheet;
              hideActionSheetResult = obj.hideActionSheet(ConjurePublishSheet);
            }
            return;
          }
        }
        if (null != stateFromStores) {
          class C {
            constructor() {
              if (closure_1) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[15]);
                tmp3 = ConjurePublishSheet;
                hideActionSheetResult = obj.hideActionSheet(ConjurePublishSheet);
              }
              return;
            }
          }
          obj2 = { project: stateFromStores, publish: tmp4, entryPoint };
          tmp14 = closure_7(PublishSheetBody, obj2);
        }
      }
      cResult[7] = entryPoint;
      cResult[8] = stateFromStores;
      cResult[9] = tmp4;
      cResult[10] = tmp14;
      const tmpResult = projectId(504);
    }
  : function ConjurePublishSheet(projectId) {
      projectId = projectId.projectId;
      ({ publishOptions, entryPoint } = projectId);
      const tmp = useConjurePublishActionDefault(projectId, publishOptions);
      const items = [ConjureProjectStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureProjectStore.getProject(projectId),
        items1,
      );
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
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SectionTitle(title) {
      const cResult = c.c(3);
      title = title.title;
      const tmp4 = closure_13();
      if (cResult[0] === tmp4.sectionTitle) {
        if (cResult[1] === title) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = React5(Text_Text.Text, {
        variant: "text-sm/semibold",
        color: "text-subtle",
        accessibilityRole: "header",
        style: tmp4.sectionTitle,
        children: title,
      });
      cResult[0] = tmp4.sectionTitle;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      obj2 = {
        variant: "text-sm/semibold",
        color: "text-subtle",
        accessibilityRole: "header",
        style: tmp4.sectionTitle,
        children: title,
      };
    }
  : function SectionTitle(children) {
      const tmp = closure_13();
      return React5(Text_Text.Text, {
        variant: "text-sm/semibold",
        color: "text-subtle",
        accessibilityRole: "header",
        style: closure_13().sectionTitle,
        children: children.title,
      });
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RowSection(arg0) {
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
    }
  : function RowSection(title) {
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
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentRow(arg0) {
      const cResult = c.c(8);
      ({ icon, label } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] !== icon) {
        obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
        const tmp8 = React5(icon, obj2);
        cResult[0] = icon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== label) {
        const obj3 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: label };
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
    }
  : function ContentRow(arg0) {
      ({ icon, label } = arg0);
      obj = { style: closure_13().row, children: null };
      const items = [
        React5(icon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }),
        React5(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: label }),
      ];
      obj.children = items;
      return React6(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppChannelsPrivateSection(arg0) {
      const cResult = c.c(10);
      ({ channelCount, appChannelsPrivate, disabled } = arg0);
      const isPrivate = appChannelsPrivate.isPrivate;
      let str = "text-muted";
      if (isPrivate) {
        str = "text-default";
      }
      if (cResult[0] !== channelCount) {
        const intl = util.intl;
        obj2 = { count: channelCount };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef3864.Td1mlg, obj2);
        cResult[0] = channelCount;
        cResult[1] = formatToPlainStringResult;
        let tmp4 = formatToPlainStringResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === str) {
        if (cResult[3] === tmp4) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === appChannelsPrivate.setPrivate) {
          if (cResult[6] === disabled) {
            if (cResult[7] === isPrivate) {
              if (cResult[8] === tmp7) {
                let tmp9 = cResult[9];
              }
              return tmp9;
            }
          }
        }
        const obj3 = {
          start: true,
          end: true,
          label: tmp7,
          value: isPrivate,
          disabled,
          onValueChange: appChannelsPrivate.setPrivate,
        };
        const tmp11 = React5(TableSwitchRow.TableSwitchRow, obj3);
        cResult[5] = appChannelsPrivate.setPrivate;
        cResult[6] = disabled;
        cResult[7] = isPrivate;
        cResult[8] = tmp7;
        cResult[9] = tmp11;
        tmp9 = tmp11;
      }
      const tmp8 = React5(Text_Text.Text, { variant: "text-md/medium", color: str, children: tmp4 });
      cResult[2] = str;
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : function AppChannelsPrivateSection(appChannelsPrivate) {
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
      obj2.children = intl.formatToPlainString(_modDef3864.Td1mlg, { count: channelCount });
      obj.label = React5(Text_Text.Text, obj2);
      obj.value = isPrivate;
      obj.disabled = disabled;
      obj.onValueChange = appChannelsPrivate.setPrivate;
      return React5(TableSwitchRow.TableSwitchRow, obj);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelRow(channel) {
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
    }
  : function ChannelRow(channel) {
      obj = { icon: AppsIcon2.AppsIcon, label: null };
      let str = useChannelNameDefault(channel.channel);
      if (str == null) {
        str = "";
      }
      obj.label = str;
      return React5(closure_20, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  obj2 = { key: ConjurePublishSheet, content: null };
  const merged = Object.assign(arg0);
  obj2.content = React5(closure_16, {});
  ActionSheetActionCreators.showActionSheet(obj2);
}
