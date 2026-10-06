// discord_app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod8629 from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, importDefault, userId;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { appIcon: size, header: obj2, refresh: obj3, divider: obj4, stillSyncing: obj5 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_12,
};
obj4 = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let canStartAuthorization;
      let cardStyle;
      let closure_1;
      let fetched;
      let hasIdentity;
      let isLoading;
      let items2;
      let locale;
      let obj5;
      let obj6;
      let pending;
      let refresh;
      let rendererProps;
      let resolutionContext;
      let surfaceConfigs;
      let tmp11;
      let tmp5;
      let tmp6;
      let token;
      let widget;
      let tmp = userId;
      const obj = userId(token[14]);
      const cResult = obj.c(67);
      userId = userId.userId;
      ({ widget, cardStyle, rendererProps } = userId);
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function p() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(token[15]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const tmpResult6 = tmp(token[16]);
        const compactNumberFormat = tmpResult6.createCompactNumberFormat(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = compactNumberFormat;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        cResult[4] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== userId) {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        cResult[5] = userId;
        cResult[6] = O;
      } else {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      const tmpResult7 = tmp(token[15]);
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp11, O);
      const tmpResult8 = tmp(token[17]);
      const getOrFetchApplication = tmpResult8.useGetOrFetchApplication(widget.applicationId);
      if (cResult[7] !== getOrFetchApplication) {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        let iconURL;
        if (getOrFetchApplication != null) {
          class O {
            constructor() {
              return AuthenticationStore.getId() === userId;
            }
          }
          iconURL = getOrFetchApplication.getIconURL(16);
        }
        cResult[7] = getOrFetchApplication;
        cResult[8] = iconURL;
      } else {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[9] !== getOrFetchApplication) {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        if (getOrFetchApplication != null) {
          class O {
            constructor() {
              return AuthenticationStore.getId() === userId;
            }
          }
        }
        cResult[9] = getOrFetchApplication;
        cResult[10] = undefined;
      } else {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      const tmpResult9 = tmp(token[18]);
      if (tmpResult9.useGame(tmp17).data != null) {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[11] === undefined) {
        class O {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        const tmp21 = require("useOpenGameProfileModal")(obj6);
        importDefault = tmp21;
        if (rendererProps == null) {
          class O {
            constructor() {
              return AuthenticationStore.getId() === userId;
            }
          }
        }
        ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = rendererProps);
        const tmp23 = require("useStartAuthorize")(getOrFetchApplication);
        token = tmp23.token;
        ({ fetched, canStartAuthorization } = tmp23);
        require("useIsOwnedConjureApplication")(widget.applicationId, stateFromStores1);
        ({ pending, refresh } = require("useApplicationWidgetRefresh")(widget.applicationId));
        require("useApplicationWidgetRefresh")(widget.applicationId);
        surfaceConfigs[tmp(undefined, token[25]).ApplicationWidgetConfigSurface.WIDGET_TOP];
        const tmp27 = surfaceConfigs[tmp(undefined, token[25]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
        if (cResult[14] === tmp15) {
          class O {
            constructor() {
              return AuthenticationStore.getId() === userId;
            }
          }
          if (stateFromStores1) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          if (cResult[28] === tmp27) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          const tmpResult10 = tmp(token[16]);
          const result = tmpResult10.bindResolveFieldValue(resolutionContext);
          const header = tmp4.header;
          if (cResult[38] !== tmp21) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
            cResult[38] = tmp21;
            cResult[39] = tmp33;
          } else {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          if (cResult[40] !== widget) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
            const widgetTitle = obj12.getWidgetTitle(widget);
            cResult[40] = widget;
            cResult[41] = widgetTitle;
          } else {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          if (cResult[42] !== widget) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
            const widgetTitle1 = obj13.getWidgetTitle(widget);
            cResult[42] = widget;
            cResult[43] = widgetTitle1;
          } else {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          if (cResult[44] !== tmp37) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
            const obj2 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp37 };
            cResult[44] = tmp37;
            cResult[45] = closure_9(tmp(token[29]).Text, obj2);
            const tmp40 = closure_9(tmp(token[29]).Text, obj2);
          } else {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          if (cResult[46] === tmp4.header) {
            class O {
              constructor() {
                return AuthenticationStore.getId() === userId;
              }
            }
          }
          const obj3 = {
            style: header,
            onPress: tmp33,
            disabled: null == tmp21,
            accessibilityRole: "button",
            accessibilityLabel: tmp35,
            children: items2,
          };
          items2 = [tmp28, tmp39];
          cResult[46] = tmp4.header;
          cResult[47] = tmp33;
          cResult[48] = null == tmp21;
          cResult[49] = tmp35;
          cResult[50] = tmp39;
          cResult[51] = tmp28;
          cResult[52] = closure_10(closure_5, obj3);
          const tmp44 = closure_10(closure_5, obj3);
        }
        let tmp29 = null;
        if (null != tmp15) {
          class O {
            constructor() {
              return AuthenticationStore.getId() === userId;
            }
          }
          const obj4 = { source: obj5, style: tmp4.appIcon };
          obj5 = { uri: tmp15 };
          tmp29 = closure_9(closure_4, obj4);
        }
        cResult[14] = tmp15;
        cResult[15] = tmp4;
        cResult[16] = tmp29;
      }
      obj6 = {
        location: "UserProfileApplicationWidgetCard",
        applicationId: undefined,
        source: tmp(token[19]).GameProfileSources.UserProfileApplicationWidget,
        sourceUserId: userId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      };
      cResult[11] = undefined;
      cResult[12] = userId;
      cResult[13] = obj6;
    }
  : (userId) => {
      let canStartAuthorization;
      let cardStyle;
      let closure_2;
      let fetched;
      let hasIdentity;
      let intl;
      let intl2;
      let intl3;
      let isLoading;
      let items3;
      let items4;
      let items5;
      let items6;
      let layout;
      let layout2;
      let locale;
      let obj6;
      let obj8;
      let pending;
      let refresh;
      let rendererProps;
      let resolutionContext;
      let surfaceConfigs;
      let tmp2Result5;
      let tmp2Result7;
      let tmp2Result8;
      let widget;
      userId = userId.userId;
      ({ widget, cardStyle, rendererProps } = userId);
      dependencyMap = undefined;
      let token;
      let tmp = closure_11();
      let obj = userId(504);
      const items = [LocaleStore];
      const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
      const items1 = [stateFromStores];
      const memo = token.useMemo(() => {
        const obj = _mod8629;
        return obj.createCompactNumberFormat(stateFromStores);
      }, items1);
      const items2 = [AuthenticationStore];
      const obj2 = userId(504);
      const stateFromStores1 = obj2.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
      const obj3 = userId(6670);
      const getOrFetchApplication = obj3.useGetOrFetchApplication(widget.applicationId);
      let iconURL;
      if (getOrFetchApplication != null) {
        iconURL = getOrFetchApplication.getIconURL(16);
      }
      let canonicalGameId;
      const useGame = userId(6822).useGame;
      userId(6822);
      if (getOrFetchApplication != null) {
        canonicalGameId = getOrFetchApplication.getCanonicalGameId();
      }
      const data = useGame(canonicalGameId).data;
      let id;
      const tmp11 = stateFromStores(8353);
      if (data != null) {
        id = data.id;
      }
      const obj4 = {
        location: "UserProfileApplicationWidgetCard",
        applicationId: id,
        source: userId(8352).GameProfileSources.UserProfileApplicationWidget,
        sourceUserId: userId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      };
      const tmp11Result = tmp11(obj4);
      dependencyMap = tmp11Result;
      let tmp14 = rendererProps;
      if (rendererProps == null) {
        tmp14 = tmp10(8724)(userId, widget.applicationId);
      }
      ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp14);
      const tmp15 = stateFromStores(6667)(getOrFetchApplication);
      token = tmp15.token;
      ({ fetched, canStartAuthorization } = tmp15);
      const tmp16 = stateFromStores(8733)(widget.applicationId, stateFromStores1);
      ({ pending, refresh } = stateFromStores(12713)(widget.applicationId));
      stateFromStores(12713)(widget.applicationId);
      const tmp18 = surfaceConfigs[userId(undefined, 8712).ApplicationWidgetConfigSurface.WIDGET_TOP];
      const tmp19 = surfaceConfigs[userId(undefined, 8712).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
      let tmp20 = null;
      if (null != iconURL) {
        const obj5 = { source: obj6, style: tmp.appIcon };
        obj6 = { uri: iconURL };
        tmp20 = closure_9(closure_4, obj5);
      }
      if (stateFromStores1) {
        if (!isLoading) {
          if (!hasIdentity) {
            let tmp23 = null != token;
            if (tmp23) {
              const _Array = Array;
              const arr = Array.from(userId(8025).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
              let someResult = arr.some((item) => {
                const scopes = token.scopes;
                return scopes.includes(item);
              });
              if (!someResult) {
                let scopes = token.scopes;
                someResult = scopes.includes(tmp2(8025).OAuth2Scopes.SDK_SOCIAL_LAYER);
              }
              if (!someResult) {
                const scopes2 = token.scopes;
                someResult = scopes2.includes(tmp2(8025).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
              }
              tmp23 = someResult;
            }
            if (fetched) {
              let tmp26;
              if (canStartAuthorization) {
                tmp26 = null;
              }
              return tmp26;
            }
            const obj7 = {
              style: cardStyle,
              title: tmp2Result5.getWidgetTitle(widget),
              titleLeadingIcon: tmp20,
              children: closure_10(closure_6, obj8),
            };
            const tmp10Result = stateFromStores(6713);
            obj8 = { style: tmp.stillSyncing, children: items3 };
            tmp2Result5 = userId(8622);
            const obj9 = { size: "xs", color: stateFromStores(587).colors.TEXT_MUTED };
            const HourglassIcon = tmp2(12717).HourglassIcon;
            items3 = [closure_9(HourglassIcon, obj9)];
            const obj10 = {
              variant: "text-sm/medium",
              color: "text-muted",
              children: intl.string(userId(1126).t.z5K4Uv),
            };
            const Text = tmp2(4892).Text;
            intl = tmp2(1126).intl;
            items3[1] = closure_9(Text, obj10);
            tmp26 = closure_9(tmp10Result, obj7);
          }
        }
      }
      const tmp2Result6 = userId(8629);
      const result = tmp2Result6.bindResolveFieldValue(resolutionContext);
      const obj11 = {
        style: tmp.header,
        onPress() {
          let tmp;
          if (closure_2 != null) {
            tmp = closure_2();
          }
          return tmp;
        },
        disabled: null == tmp11Result,
        accessibilityRole: "button",
        accessibilityLabel: tmp2Result7.getWidgetTitle(widget),
        children: items4,
      };
      items4 = [tmp20];
      tmp2Result7 = userId(8622);
      const obj12 = {
        variant: "text-sm/medium",
        color: "text-strong",
        lineClamp: 1,
        children: tmp2Result8.getWidgetTitle(widget),
      };
      const Text2 = tmp2(4892).Text;
      tmp2Result8 = userId(8622);
      items4[1] = closure_9(Text2, obj12);
      const tmp34 = closure_10(closure_5, obj11);
      if (tmp18 != null) {
        layout = tmp18.layout;
      }
      let tmp33Result = null;
      if (null != tmp18) {
        if (userId(8627).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
          const obj13 = { header: tmp34, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
          tmp33Result = closure_9(tmp10(8628), obj13);
        } else {
          tmp33Result = null;
          if (userId(8627).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
            const obj14 = { header: tmp34, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
            tmp33Result = closure_9(tmp10(8720), obj14);
          }
        }
      }
      if (tmp19 != null) {
        layout2 = tmp19.layout;
      }
      let tmp33Result2 = null;
      if (null != tmp19) {
        if (userId(8627).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
          const obj15 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
          tmp33Result2 = closure_9(tmp10(8721), obj15);
        } else if (userId(8627).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
          const obj16 = { bottomConfig: tmp19, resolveFieldValue: result };
          tmp33Result2 = closure_9(tmp10(8722), obj16);
        } else {
          tmp33Result2 = null;
          if (userId(8627).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
            const obj17 = { bottomConfig: tmp19, resolveFieldValue: result };
            tmp33Result2 = closure_9(tmp10(8723), obj17);
          }
        }
      }
      let tmp32Result2 = null;
      if (null != tmp33Result) {
        tmp32Result2 = null;
        if (null != tmp33Result2) {
          const obj18 = { style: cardStyle, children: items5 };
          items5 = [tmp33Result, , ,];
          const obj19 = { style: tmp.divider };
          const tmp10Result2 = stateFromStores(6713);
          items5[1] = closure_9(closure_6, obj19);
          items5[2] = tmp33Result2;
          let tmp32Result = null;
          if (true === tmp16) {
            tmp32Result = null;
            if (null == rendererProps) {
              const obj20 = {
                accessibilityRole: "button",
                accessibilityLabel: intl2.string(userId(1126).t.wzzjk9),
                hitSlop: 8,
                disabled: pending,
                onPress: refresh,
                style: tmp.refresh,
                children: items6,
              };
              const PressableOpacity = tmp2(5916).PressableOpacity;
              intl2 = tmp2(1126).intl;
              const obj21 = { size: "xs", color: stateFromStores(587).colors.TEXT_MUTED };
              const RetryIcon = tmp2(11377).RetryIcon;
              items6 = [closure_9(RetryIcon, obj21)];
              const obj22 = {
                variant: "text-xs/medium",
                color: "text-muted",
                children: intl3.string(userId(1126).t.wzzjk9),
              };
              const Text3 = tmp2(4892).Text;
              intl3 = tmp2(1126).intl;
              items6[1] = closure_9(Text3, obj22);
              tmp32Result = closure_10(PressableOpacity, obj20);
            }
          }
          items5[3] = tmp32Result;
          tmp32Result2 = closure_10(tmp10Result2, obj18);
        }
      }
      return tmp32Result2;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default tmp5;
