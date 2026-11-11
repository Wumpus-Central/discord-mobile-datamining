// discord_app/modules/user_settings/dev_tools/native/BuildOverridesScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import build_overrides_BuildOverrideUtils from "../../../build_overrides/native/BuildOverrideUtils.tsx";
import RecentBuildOverrides from "../../../build_overrides/native/RecentBuildOverrides.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../../../build_overrides/BuildOverrideStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5243);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { content: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, container: null };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
  obj.container = { padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/dev_tools/native/BuildOverridesScreen.tsx");

export default noop.memo(function BuildOverridesScreen() {
  function run(arg0) {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_10 = async function _run(arg0) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            noop(true);
            c4 = 1;
            c2 = 2;
            c5 = 1;
            const obj4 = { value: stateFromStores(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_5(false);
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_129_5(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          closure_129_5(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp22;
        } else {
          c2 = tmp;
        }
      }
    }
  };
  closure_11 = async function _share(bottom) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (bottom === 1) {
        throw value;
      } else if (bottom === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (bottom === 1) {
            c5 = 3;
            throw value;
          } else if (bottom === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp4;
            stateFromStores = tmp8;
            closure_128_0 = undefined;
            if (null != stateFromStores) {
              ScrollView(true);
              currentBuildOverride(undefined);
              c3 = 2;
              const obj6 = { overrides: null, meta: null };
              const obj7 = {};
              obj7[stateFromStores(tmp54[10]).DEVICE_FIELD] = tmp67;
              obj6.overrides = obj7;
              const obj8 = {
                release_channel: null,
                user_ids: [],
                ttl_seconds: 3600,
                allow_logged_out: false,
                allowed_versions: null,
              };
              let tmp51;
              if (null != stateFromStores(tmp54[13]).APP_VERSION) {
                items = [stateFromStores(tmp54[13]).APP_VERSION];
                tmp51 = items;
              }
              obj8.allowed_versions = tmp51;
              obj6.meta = obj8;
              c4 = 3;
              c5 = 1;
              const obj9 = { value: stateFromStores(tmp54[12]).getPublicBuildOverrideLink(obj6), done: false };
              return obj9;
            } else {
              c5 = 3;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_129_7("Unable to create a link. Try again.");
          } else if (bottom === 1) {
            c5 = 3;
            throw value;
          } else if (bottom === 2) {
            c3 = 0;
            closure_129_6(false);
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_0 = value;
            if (false !== closure_128_0.error) {
              let tmp20 = closure_129_7;
              if (typeof closure_128_0.error === "string") {
                let error = closure_128_0.error;
              } else {
                const _JSON = JSON;
                error = JSON.stringify(closure_128_0.error);
              }
              tmp20(error);
              c3 = 0;
              tmp20 = closure_129_6(false);
              c5 = 3;
            } else {
              const _String = String;
              stateFromStores(tmp54[14]).copy(String(closure_128_0.url));
              const obj = stateFromStores(tmp54[14]);
              const result = stateFromStores(tmp54[15]).presentCopiedToClipboard();
              c3 = 1;
              const obj2 = stateFromStores(tmp54[15]);
            }
          }
          c3 = 0;
          closure_129_6(false);
        }
        c3 = 0;
        closure_129_6(false);
        throw tmp54;
      } catch (tmp54) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp54;
        } else if (tmp2 === tmp56) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp2 = closure_11(first(5850)({ includeKeyboardHeight: true }).insets.bottom);
  items = [BuildOverrideStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[stateFromStores(undefined, 13958).DEVICE_FIELD];
    }
    return tmp;
  });
  const tmp5 = first1(noop.useState({ type: "branch", id: "" }), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  let obj = stateFromStores(504);
  let obj2 = noop;
  [arr2, asyncGeneratorStep] = first1(noop.useState(stateFromStores(13961).getRecentDeviceBuildOverrides), 2);
  const tmp8 = first1(noop.useState(false), 2);
  first1 = tmp8[0];
  noop = tmp8[1];
  const tmp7 = first1(noop.useState(stateFromStores(13961).getRecentDeviceBuildOverrides), 2);
  [tmp11, ScrollView] = first1(noop.useState(false), 2);
  const tmp10 = first1(noop.useState(false), 2);
  [tmp13, BuildOverrideStore] = first1(noop.useState(), 2);
  const trimmed = first.id.trim();
  let str2 = "Discord Android";
  if ("discord_ios" === stateFromStores(13958).DEVICE_FIELD) {
    str2 = "Discord iOS";
  }
  const items1 = [stateFromStores];
  const effect = obj2.useEffect(() => {
    if (null != stateFromStores) {
      const result = RecentBuildOverrides.recordDeviceBuildOverride(tmp);
      asyncGeneratorStep(RecentBuildOverrides.getRecentDeviceBuildOverrides());
    }
  }, items1);
  let obj3 = {
    style: tmp2.content,
    contentContainerStyle: tmp2.container,
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  if (null != stateFromStores) {
    let MobilePhoneIcon = tmp3(5970).CopyIcon;
  } else {
    MobilePhoneIcon = tmp3(7720).MobilePhoneIcon;
  }
  let obj4 = { icon: trimmed(MobilePhoneIcon, {}), label: null, subLabel: null, onPress: null };
  let str3;
  if (stateFromStores != null) {
    str3 = stateFromStores.id;
  }
  if (str3 == null) {
    str3 = "Default build";
  }
  obj4.label = str3;
  let str4 = "You\u2019re using the regular release. No build override is active.";
  if (null != stateFromStores) {
    const _HermesInternal = HermesInternal;
    str4 = "" + str2 + " \u00B7 Override active";
  }
  obj4.subLabel = str4;
  let fn;
  if (null != stateFromStores) {
    fn = () => {
      ClipboardUtils.copy(stateFromStores.id);
      const result = ToastUtils.presentCopiedToClipboard();
    };
  }
  obj4.onPress = fn;
  const items2 = [trimmed(stateFromStores(7379).TableRow, obj4)];
  let tmp18Result = null != stateFromStores;
  if (tmp18Result) {
    let obj5 = { children: null };
    let obj6 = {
      icon: tmp16(tmp3(13206).RefreshIcon, {}),
      label: "Refresh override",
      onPress: tmp3(13958).refreshBuildOverride,
      arrow: true,
    };
    const items3 = [tmp16(tmp3(7379).TableRow, obj6)];
    let obj7 = {
      icon: tmp16(tmp3(5977).TrashIcon, { color: "text-feedback-critical" }),
      label: "Clear override",
      subLabel: stateFromStores.id,
      variant: "danger",
      disabled: first1,
      onPress() {
        return run(build_overrides_BuildOverrideUtils.clearBuildOverride);
      },
      arrow: true,
    };
    items3[1] = tmp16(tmp3(7379).TableRow, obj7);
    obj5.children = items3;
    tmp18Result = tmp18(run, obj5);
  }
  items2[1] = tmp18Result;
  const items4 = [
    closure_10(stateFromStores(7680).TableRowGroup, { title: "Current build", hasIcons: true, children: items2 }),
    ,
    ,
  ];
  let obj8 = {
    title: "Manual override",
    description: "Choose a branch or commit to run on this device.",
    hasIcons: true,
    children: null,
  };
  const tmp12 = first1(noop.useState(), 2);
  obj8.children = trimmed(stateFromStores(7379).TableRow, {
    icon: trimmed(stateFromStores(7720).MobilePhoneIcon, {}),
    label: "Project",
    subLabel: str2,
  });
  const items5 = [trimmed(stateFromStores(7680).TableRowGroup, obj8), , ,];
  let obj10 = {
    title: "Target type",
    value: first.type,
    onChange(type) {
      return dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: null,
  };
  let obj9 = { icon: trimmed(stateFromStores(7720).MobilePhoneIcon, {}), label: "Project", subLabel: str2 };
  const items6 = [
    trimmed(stateFromStores(7681).TableRadioRow, {
      value: "branch",
      label: "Branch name",
      icon: trimmed(stateFromStores(9455).TagIcon, {}),
    }),
  ];
  const obj11 = { value: "branch", label: "Branch name", icon: trimmed(stateFromStores(9455).TagIcon, {}) };
  items6[1] = trimmed(stateFromStores(7681).TableRadioRow, {
    value: "id",
    label: "Commit SHA",
    icon: trimmed(stateFromStores(18276).HashmarkIcon, {}),
  });
  obj10.children = items6;
  items5[1] = closure_10(stateFromStores(7679).TableRadioGroup, obj10);
  if ("branch" === first.type) {
    let HashmarkIcon = tmp3(9455).TagIcon;
  } else {
    HashmarkIcon = tmp3(18276).HashmarkIcon;
  }
  const obj13 = {
    leadingIcon: HashmarkIcon,
    label: null,
    value: null,
    onChange: null,
    placeholder: null,
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
  };
  let str7 = "Commit SHA";
  if ("branch" === first.type) {
    str7 = "Branch name";
  }
  obj13.label = str7;
  obj13.value = first.id;
  obj13.onChange = function onChange(id) {
    const obj = {};
    const merged = Object.assign(first);
    obj.id = id;
    return dependencyMap(obj);
  };
  let str8 = "Full commit SHA";
  if ("branch" === first.type) {
    str8 = "team/feature-name";
  }
  obj13.placeholder = str8;
  items5[2] = trimmed(stateFromStores(7553).TextInput, obj13);
  let tmp22 = first1;
  if (!first1) {
    tmp22 = "" === trimmed;
  }
  const obj14 = { spacing: 16, children: null };
  items5[3] = trimmed(stateFromStores(5873).Button, {
    text: "Apply override",
    disabled: tmp22,
    loading: first1,
    onPress() {
      return run(() => {
        const obj2 = {};
        const merged = Object.assign(first);
        obj2.id = id;
        return stateFromStores(closure_2[10]).setBuildOverride(obj2);
      });
    },
  });
  obj14.children = items5;
  items4[1] = closure_10(stateFromStores(6274).Stack, obj14);
  if (0 === arr2.length) {
    const obj16 = {
      icon: tmp16(tmp3(13206).RefreshIcon, {}),
      label: "No recent builds",
      subLabel: "Your recent builds will appear here after you apply an override.",
    };
    let mapped = tmp16(tmp3(7379).TableRow, obj16);
  } else {
    mapped = arr2.map((id) => {
      closure_0 = id;
      id = undefined;
      if (closure_0 != null) {
        id = tmp.id;
      }
      let tmp3 = id === id.id && tmp.type === id.type;
      if ("branch" === id.type) {
        let tmp4Result = trimmed(stateFromStores(9455).TagIcon, {});
      } else {
        tmp4Result = trimmed(stateFromStores(18276).HashmarkIcon, {});
      }
      const obj = { icon: tmp4Result, arrow: !tmp3, label: id.id, subLabel: null, disabled: null, onPress: null };
      let str = "Active";
      if (!tmp3) {
        let str2 = "Commit";
        if ("branch" === id.type) {
          str2 = "Branch";
        }
        str = `${str2} · Tap to reapply`;
      }
      obj.subLabel = str;
      if (!tmp3) {
        tmp3 = first1;
      }
      obj.disabled = tmp3;
      obj.onPress = function onPress() {
        return run(() => stateFromStores(closure_2[10]).setBuildOverride(id));
      };
      return trimmed(stateFromStores(7379).TableRow, obj, "" + id.type + ":" + id.id);
    });
  }
  items4[2] = trimmed(stateFromStores(7680).TableRowGroup, {
    title: "Recent builds",
    description: "Return to a build you used on this device.",
    hasIcons: true,
    children: mapped,
  });
  const obj17 = { icon: trimmed(stateFromStores(5966).LinkIcon, {}), label: null, subLabel: null };
  let str10 = "Apply an override to create a link.";
  if (null != stateFromStores) {
    str10 = stateFromStores.id;
  }
  obj17.label = str10;
  let tmp24;
  if (null != stateFromStores) {
    tmp24 = str2;
  }
  const obj12 = { value: "id", label: "Commit SHA", icon: trimmed(stateFromStores(18276).HashmarkIcon, {}) };
  const obj15 = {
    text: "Apply override",
    disabled: tmp22,
    loading: first1,
    onPress() {
      return run(() => {
        const obj2 = {};
        const merged = Object.assign(first);
        obj2.id = id;
        return stateFromStores(closure_2[10]).setBuildOverride(obj2);
      });
    },
  };
  obj17.subLabel = tmp24;
  const items7 = [
    trimmed(stateFromStores(7680).TableRowGroup, {
      title: "Share an override",
      description: "Copy a public link to the current build. It expires in one hour and requires sign-in.",
      hasIcons: true,
      children: trimmed(stateFromStores(7379).TableRow, obj17),
    }),
    ,
  ];
  let tmp16Result2 = null != tmp13;
  if (tmp16Result2) {
    const obj19 = { variant: "body-sm/normal", color: "text-feedback-critical", children: tmp13 };
    tmp16Result2 = tmp16(tmp3(5866).Text, obj19);
  }
  items7[1] = tmp16Result2;
  let tmp26 = null == stateFromStores;
  if (!tmp26) {
    tmp26 = tmp11;
  }
  const obj20 = { spacing: 32, children: null };
  const obj21 = { spacing: 12, children: null };
  items7[2] = trimmed(stateFromStores(5873).Button, {
    text: "Copy public link",
    variant: "secondary",
    disabled: tmp26,
    loading: tmp11,
    onPress: function share() {
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  });
  obj21.children = items7;
  items4[3] = closure_10(stateFromStores(6274).Stack, obj21);
  obj20.children = items4;
  obj3.children = closure_10(stateFromStores(6274).Stack, obj20);
  return trimmed(ScrollView, obj3);
});
