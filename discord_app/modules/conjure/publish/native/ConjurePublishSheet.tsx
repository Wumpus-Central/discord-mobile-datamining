// discord_app/modules/conjure/publish/native/ConjurePublishSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
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
          const intl = tmp4(tmp36[24]).intl;
          showCriticalToast(intl.string(v3(tmp36[25]).Fi7boI));
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
              closure_128_0.run(closure_128_1);
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
  const tmp4 = entryPoint(12161)(project, publish);
  dependencyMap = tmp4;
  entryPoint(5973)(() => true, tmp4.saving);
  closure_3 = noop.useRef(false);
  const context = noop.useContext(entryPoint(5581));
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
  ({ editable, identity, sharing } = tmp4);
  if (tmp4.initial) {
    const initialChannelNames = tmp4.initialChannelNames;
    let mapped = initialChannelNames.map((label) =>
      closure_1_7(closure_1_20, { icon: publish(8577).AppsIcon, label }, label),
    );
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => closure_1_7(closure_1_21, { channel }, channel.id));
  }
  const items1 = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      return closure_1_7(closure_1_20, { icon: obj2[surface], label: label.label }, surface);
    }),
  ];
  components = tmp4.components;
  obj2 = {
    startExpanded: editable,
    keyboardShouldPersistTaps: "handled",
    dismissAccessibilityLabel: null,
    children: null,
  };
  let intl = publish(1125).intl;
  obj2.dismissAccessibilityLabel = intl.string(entryPoint(3831).NEPcoi);
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
          entryPoint(5664).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          obj = entryPoint(5664);
        }
      },
    };
    let tmp11Result = closure_7(publish(12167).ConjureAppIconTile, obj4);
  } else {
    const obj5 = { project, size: "dialog" };
    tmp11Result = closure_7(tmp2(12172), obj5);
  }
  const items2 = [tmp11Result, , , , ,];
  if (editable) {
    const obj6 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
    const intl2 = publish(1125).intl;
    obj6.label = intl2.string(tmp2(3831).knevPu);
    ({ name: obj9.value, setName: obj9.onChange } = tmp4);
    obj6.maxLength = publish(6775).MAX_PROJECT_NAME_LENGTH;
    ({ saving: obj9.disabled, nameError } = tmp4);
    const obj7 = { children: null };
    obj6.errorMessage = nameError;
    const items3 = [closure_7(publish(7010).TextInput, obj6)];
    const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl3 = publish(1125).intl;
    obj8.label = intl3.string(tmp2(3831).ynaGa1);
    const intl4 = publish(1125).intl;
    obj8.placeholder = intl4.string(tmp2(3831)["I+3UTL"]);
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    obj8.maxLength = publish(6775).MAX_APP_DESCRIPTION_LENGTH;
    obj8.disabled = tmp4.saving;
    items3[1] = closure_7(publish(7182).TextArea, obj8);
    obj7.children = items3;
    let tmp13Result = closure_9(closure_8, obj7);
  } else {
    const obj10 = { style: tmp.nameGroup, children: null };
    const obj12 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
    const items4 = [closure_7(publish(5235).Text, obj12)];
    let tmp11Result4 = null;
    if ("" !== tmp4.description) {
      const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp11Result4 = closure_7(publish(5235).Text, obj13);
    }
    items4[1] = tmp11Result4;
    obj10.children = items4;
    tmp13Result = closure_9(tmp14, obj10);
  }
  items2[1] = tmp13Result;
  const obj14 = { title: null, rows: null };
  const intl5 = publish(1125).intl;
  obj14.title = intl5.string(entryPoint(3831).BqNMms);
  obj14.rows = items1;
  items2[2] = closure_7(closure_19, obj14);
  const obj15 = { title: null, following: null, rows: null };
  const intl6 = publish(1125).intl;
  obj15.title = intl6.string(entryPoint(3831).LnqeFd);
  obj15.following = items1.length > 0;
  const devicePermissions = tmp4.devicePermissions;
  obj15.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_11[item], label: null };
    const intl = publish(1125).intl;
    obj.label = intl.string(publish(12161).CONJURE_PUBLISH_PERMISSION_LABELS[item]);
    return closure_1_7(closure_1_20, obj, item);
  });
  items2[3] = closure_7(closure_19, obj15);
  let tmp13Result2 = null;
  if (null != sharing) {
    const obj16 = { title: null };
    const intl7 = publish(1125).intl;
    obj16.title = intl7.string(tmp2(3831).esTM8y);
    const items5 = [closure_7(closure_18, obj16)];
    const obj17 = { style: tmp.sharingRow, children: null };
    if (null != sharing.guild) {
      const obj18 = { guild: sharing.guild, size: publish(6885).GuildIconSizes.SMALL_36 };
      let tmp11Result5 = closure_7(tmp2(6885), obj18);
      const tmp2Result = tmp2(6885);
    } else {
      const obj19 = { style: tmp.onlyMeIcon, children: null };
      const obj20 = { size: "xs", color: tmp2(587).colors.ICON_DEFAULT };
      obj19.children = closure_7(publish(12176).UserIcon, obj20);
      tmp11Result5 = closure_7(tmp14, obj19);
    }
    const items6 = [tmp11Result5];
    const obj21 = { style: tmp.rowText, children: null };
    guild = sharing.guild;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl8 = publish(1125).intl;
      name = intl8.string(tmp2(3831)["37xgkF"]);
    }
    const obj22 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    const items7 = [closure_7(publish(5235).Text, obj22)];
    let tmp11Result6 = null;
    if (null != sharing.caption) {
      const obj23 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp11Result6 = closure_7(publish(5235).Text, obj23);
    }
    const obj24 = { children: null };
    items7[1] = tmp11Result6;
    obj21.children = items7;
    items6[1] = closure_9(tmp14, obj21);
    obj17.children = items6;
    items5[1] = closure_9(tmp14, obj17);
    obj24.children = items5;
    tmp13Result2 = closure_9(tmp14, obj24);
  }
  items2[4] = tmp13Result2;
  const obj25 = { style: tmp.footer, children: null };
  const obj26 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl9 = publish(1125).intl;
  obj26.children = intl9.string(entryPoint(3831)["+VqXVO"]);
  const items8 = [closure_7(publish(5235).Text, obj26)];
  const obj27 = { style: tmp.actions, children: null };
  const obj53 = { variant: "secondary", size: "md", grow: true, text: null, disabled: null, onPress: null };
  const intl10 = publish(1125).intl;
  obj53.text = intl10.string(publish(1125).t["ETE/oC"]);
  obj53.disabled = tmp4.saving;
  obj53.onPress = hidePublishSheet;
  const items9 = [closure_7(publish(5245).Button, obj53)];
  const obj54 = {
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
  obj54.disabled = disabled;
  obj54.loading = tmp4.saving;
  obj54.onPress = function handlePublish() {
    const self = this;
    const apply = closure_6.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items9[1] = closure_7(publish(5245).Button, obj54);
  obj27.children = items9;
  items8[1] = closure_9(closure_5, obj27);
  obj25.children = items8;
  items2[5] = closure_9(closure_5, obj25);
  obj3.children = items2;
  obj2.children = closure_9(closure_5, obj3);
  return closure_7(publish(7300).ActionSheet, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const ConjurePublishSheet = "ConjurePublishSheet";
let obj = { screen_capture: fn(9482).ScreenIcon, connect_user_to_voice: fn(8572).VoiceNormalIcon };
let obj2 = {};
obj2[fn(6775).ConjureSupportedSurface.BOT] = fn(12155).RobotIcon;
obj2[fn(6775).ConjureSupportedSurface.ACTIVITY] = fn(12157).ActivitiesIcon;
obj2[fn(6775).ConjureSupportedSurface.PROFILE_WIDGET] = fn(12159).BadgeIcon;
obj2[fn(6775).ConjureSupportedSurface.AUTOMOD] = fn(10957).ShieldIcon;
const createStyles = fn(4972);
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
        class S {
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
        cResult[5] = S;
        cResult[6] = items2;
        let tmp12 = items2;
      } else {
        class S {
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
      const effect = noop.useEffect(S, tmp12);
      if (cResult[7] === entryPoint) {
        class S {
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
        class S {
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
          class S {
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
    }
  : function ContentRow(arg0) {
      ({ icon, label } = arg0);
      obj = { style: closure_13().row, children: null };
      const items = [
        React5(icon, { size: "xs", color: nativeDefault.colors.ICON_MUTED }),
        React5(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label }),
      ];
      obj.children = items;
      return React6(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelRow(channel) {
      const cResult = c.c(2);
      let str = useChannelNameDefault(channel.channel);
      if (str == null) {
        str = "";
      }
      if (cResult[0] !== str) {
        obj2 = { icon: AppsIcon.AppsIcon, label: str };
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
      obj = { icon: AppsIcon.AppsIcon, label: null };
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
