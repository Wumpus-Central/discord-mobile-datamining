// discord_app/modules/user_profile/native/UserProfileApplicationWidgetCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { appIcon: null, header: null, refresh: null, divider: null, stillSyncing: null };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.appIcon = size;
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.refresh = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_12,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
  gap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_12,
};
obj2.divider = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
let obj5 = {
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
obj2.stillSyncing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      const cResult = userId(token[14]).c(66);
      userId = userId.userId;
      ({ widget, cardStyle } = userId);
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
      const obj = userId(token[14]);
      const stateFromStores = userId(token[15]).useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const compactNumberFormat = tmp(tmp2[16]).createCompactNumberFormat(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = compactNumberFormat;
        const tmpResult6 = tmp(tmp2[16]);
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        cResult[4] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== userId) {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
        cResult[5] = userId;
        cResult[6] = C;
      } else {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
      }
      const tmpResult = userId(token[15]);
      const stateFromStores1 = userId(token[15]).useStateFromStores(tmp11, C);
      const tmpResult7 = userId(token[15]);
      const getOrFetchApplication = userId(token[17]).useGetOrFetchApplication(widget.applicationId);
      if (cResult[7] !== getOrFetchApplication) {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
        let iconURL;
        if (getOrFetchApplication != null) {
          class C {
            constructor() {
              return closure_8.getId() === userId;
            }
          }
          iconURL = getOrFetchApplication.getIconURL(16);
        }
        cResult[7] = getOrFetchApplication;
        cResult[8] = iconURL;
      } else {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
      }
      if (cResult[9] !== getOrFetchApplication) {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
        if (getOrFetchApplication != null) {
          class C {
            constructor() {
              return closure_8.getId() === userId;
            }
          }
        }
        cResult[9] = getOrFetchApplication;
        cResult[10] = undefined;
      } else {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
      }
      const tmpResult8 = userId(token[17]);
      if (tmpResult9.useGame(tmp17).data != null) {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
      }
      if (cResult[11] === undefined) {
        class C {
          constructor() {
            return closure_8.getId() === userId;
          }
        }
        const tmp21 = require("useOpenGameProfileModal")(obj6);
        importDefault = tmp21;
        ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } =
          require("useApplicationWidgetLayoutRendererProps")(userId, widget.applicationId));
        const tmp23 = require("useStartAuthorize")(getOrFetchApplication);
        token = tmp23.token;
        ({ fetched, canStartAuthorization } = tmp23);
        require("useIsOwnedConjureApplication")(widget.applicationId, stateFromStores1);
        const tmp22 = require("useApplicationWidgetLayoutRendererProps")(userId, widget.applicationId);
        ({ pending, refresh } = require("useApplicationWidgetRefresh")(widget.applicationId));
        surfaceConfigs[tmp(undefined, tmp2[25]).ApplicationWidgetConfigSurface.WIDGET_TOP];
        if (cResult[14] === tmp15) {
          class C {
            constructor() {
              return closure_8.getId() === userId;
            }
          }
          if (stateFromStores1) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          if (cResult[28] === surfaceConfigs[tmp(undefined, tmp2[25]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM]) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          const result = tmp(tmp2[16]).bindResolveFieldValue(resolutionContext);
          if (cResult[38] !== tmp21) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
            cResult[38] = tmp21;
            cResult[39] = tmp32;
          } else {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          if (cResult[40] !== widget) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
            const widgetTitle = obj12.getWidgetTitle(widget);
            cResult[40] = widget;
            cResult[41] = widgetTitle;
          } else {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          if (cResult[42] !== widget) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
            const widgetTitle1 = obj13.getWidgetTitle(widget);
            cResult[42] = widget;
            cResult[43] = widgetTitle1;
          } else {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          if (cResult[44] !== tmp36) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
            const obj2 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp36 };
            const tmp39 = closure_9(tmp(tmp2[29]).Text, obj2);
            cResult[44] = tmp36;
            cResult[45] = tmp39;
          } else {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          if (cResult[46] === tmp4.header) {
            class C {
              constructor() {
                return closure_8.getId() === userId;
              }
            }
          }
          const obj3 = {
            style: tmp4.header,
            onPress: tmp32,
            disabled: null == tmp21,
            accessibilityRole: "button",
            accessibilityLabel: tmp34,
            children: null,
          };
          const items2 = [tmp27, tmp38];
          obj3.children = items2;
          const tmp43 = closure_10(closure_5, obj3);
          cResult[46] = tmp4.header;
          cResult[47] = tmp32;
          cResult[48] = null == tmp21;
          cResult[49] = tmp34;
          cResult[50] = tmp38;
          cResult[51] = tmp27;
          cResult[52] = tmp43;
          const tmpResult10 = tmp(tmp2[16]);
        }
        let tmp28 = null;
        if (null != tmp15) {
          class C {
            constructor() {
              return closure_8.getId() === userId;
            }
          }
          const obj4 = { source: null, style: null };
          const obj5 = { uri: tmp15 };
          obj4.source = obj5;
          obj4.style = tmp4.appIcon;
          tmp28 = closure_9(closure_4, obj4);
        }
        cResult[14] = tmp15;
        cResult[15] = tmp4;
        cResult[16] = tmp28;
        const tmp25 = require("useApplicationWidgetRefresh")(widget.applicationId);
      }
      obj6 = {
        location: "UserProfileApplicationWidgetCard",
        applicationId: undefined,
        source: userId(token[19]).GameProfileSources.UserProfileApplicationWidget,
        sourceUserId: userId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      };
      cResult[11] = undefined;
      cResult[12] = userId;
      cResult[13] = obj6;
      tmpResult9 = userId(token[18]);
    }
  : (userId) => {
      userId = userId.userId;
      ({ widget, cardStyle } = userId);
      dependencyMap = undefined;
      let token;
      let tmp = closure_11();
      const items = [LocaleStore];
      const stateFromStores = userId(504).useStateFromStores(items, () => locale.locale);
      const items1 = [stateFromStores];
      const memo = token.useMemo(
        () => resolvedValuesFromUserApplicationIdentityProfile.createCompactNumberFormat(stateFromStores),
        items1,
      );
      const obj = userId(504);
      const items2 = [AuthenticationStore];
      const stateFromStores1 = userId(504).useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
      const obj2 = userId(504);
      const getOrFetchApplication = userId(6663).useGetOrFetchApplication(widget.applicationId);
      let iconURL;
      if (getOrFetchApplication != null) {
        iconURL = getOrFetchApplication.getIconURL(16);
      }
      const obj3 = userId(6663);
      let canonicalGameId;
      if (getOrFetchApplication != null) {
        canonicalGameId = getOrFetchApplication.getCanonicalGameId();
      }
      const data = userId(6812).useGame(canonicalGameId).data;
      let id;
      const tmp2Result = userId(6812);
      if (data != null) {
        id = data.id;
      }
      const tmp10 = stateFromStores(8320);
      const tmp10Result = tmp10({
        location: "UserProfileApplicationWidgetCard",
        applicationId: id,
        source: userId(8319).GameProfileSources.UserProfileApplicationWidget,
        sourceUserId: userId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      });
      dependencyMap = tmp10Result;
      const obj4 = {
        location: "UserProfileApplicationWidgetCard",
        applicationId: id,
        source: userId(8319).GameProfileSources.UserProfileApplicationWidget,
        sourceUserId: userId,
        trackEntryPointImpression: true,
        stackingBehavior: "stack",
      };
      ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(8689)(
        userId,
        widget.applicationId,
      ));
      const tmp14 = stateFromStores(6660)(getOrFetchApplication);
      token = tmp14.token;
      ({ fetched, canStartAuthorization } = tmp14);
      const tmp13 = stateFromStores(8689)(userId, widget.applicationId);
      const tmp15 = stateFromStores(8698)(widget.applicationId, stateFromStores1);
      ({ pending, refresh } = stateFromStores(12698)(widget.applicationId));
      const tmp17 = surfaceConfigs[userId(undefined, 8677).ApplicationWidgetConfigSurface.WIDGET_TOP];
      const tmp18 = surfaceConfigs[userId(undefined, 8677).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
      let tmp19 = null;
      if (null != iconURL) {
        const obj5 = { source: null, style: null };
        const obj6 = { uri: iconURL };
        obj5.source = obj6;
        obj5.style = tmp.appIcon;
        tmp19 = closure_9(closure_4, obj5);
      }
      if (stateFromStores1) {
        if (!isLoading) {
          if (!hasIdentity) {
            let tmp22 = null != token;
            if (tmp22) {
              const _Array = Array;
              let someResult = Array.from(tmp2(8015).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
                const scopes = token.scopes;
                return scopes.includes(item);
              });
              if (!someResult) {
                let scopes = token.scopes;
                someResult = scopes.includes(tmp2(8015).OAuth2Scopes.SDK_SOCIAL_LAYER);
              }
              if (!someResult) {
                const scopes2 = token.scopes;
                someResult = scopes2.includes(tmp2(8015).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
              }
              tmp22 = someResult;
              const arr = Array.from(tmp2(8015).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
            }
            if (fetched) {
              if (canStartAuthorization) {
                let tmp25 = null;
              }
              return tmp25;
            }
            const obj7 = { style: cardStyle, title: null, titleLeadingIcon: null, children: null };
            const tmp9Result = tmp9(6706);
            obj7.title = tmp2(8587).getWidgetTitle(widget);
            obj7.titleLeadingIcon = tmp19;
            const obj8 = { style: tmp.stillSyncing, children: null };
            const obj9 = { size: "xs", color: tmp9(587).colors.TEXT_MUTED };
            const items3 = [closure_9(tmp2(12702).HourglassIcon, obj9)];
            const obj10 = { variant: "text-sm/medium", color: "text-muted", children: null };
            const intl = tmp2(1126).intl;
            obj10.children = intl.string(tmp2(1126).t.z5K4Uv);
            items3[1] = closure_9(tmp2(4886).Text, obj10);
            obj8.children = items3;
            obj7.children = closure_10(closure_6, obj8);
            tmp25 = closure_9(tmp9Result, obj7);
            const tmp2Result5 = tmp2(8587);
          }
        }
      }
      const tmp16 = stateFromStores(12698)(widget.applicationId);
      const result = userId(8594).bindResolveFieldValue(resolutionContext);
      const obj11 = {
        style: tmp.header,
        onPress() {
          let tmp;
          if (closure_2 != null) {
            tmp = closure_2();
          }
          return tmp;
        },
        disabled: null == tmp10Result,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const tmp2Result6 = userId(8594);
      obj11.accessibilityLabel = userId(8587).getWidgetTitle(widget);
      const items4 = [tmp19];
      const obj12 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: null };
      const tmp2Result7 = userId(8587);
      obj12.children = userId(8587).getWidgetTitle(widget);
      items4[1] = closure_9(userId(4886).Text, obj12);
      obj11.children = items4;
      const tmp33 = closure_10(closure_5, obj11);
      if (tmp17 != null) {
        const layout = tmp17.layout;
      }
      let tmp32Result = null;
      if (null != tmp17) {
        if (tmp2(8592).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
          const obj13 = { header: tmp33, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
          tmp32Result = closure_9(tmp9(8593), obj13);
        } else {
          tmp32Result = null;
          if (tmp2(8592).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
            const obj14 = { header: tmp33, topConfig: tmp17, resolveFieldValue: result, numberFormat: memo };
            tmp32Result = closure_9(tmp9(8685), obj14);
          }
        }
      }
      if (tmp18 != null) {
        const layout2 = tmp18.layout;
      }
      let tmp32Result2 = null;
      if (null != tmp18) {
        if (tmp2(8592).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
          const obj15 = { bottomConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
          tmp32Result2 = closure_9(tmp9(8686), obj15);
        } else if (tmp2(8592).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
          const obj16 = { bottomConfig: tmp18, resolveFieldValue: result };
          tmp32Result2 = closure_9(tmp9(8687), obj16);
        } else {
          tmp32Result2 = null;
          if (tmp2(8592).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
            const obj17 = { bottomConfig: tmp18, resolveFieldValue: result };
            tmp32Result2 = closure_9(tmp9(8688), obj17);
          }
        }
      }
      let tmp31Result2 = null;
      if (null != tmp32Result) {
        tmp31Result2 = null;
        if (null != tmp32Result2) {
          const obj18 = { style: cardStyle, children: null };
          const items5 = [tmp32Result, , ,];
          const obj19 = { style: tmp.divider };
          items5[1] = closure_9(closure_6, obj19);
          items5[2] = tmp32Result2;
          let tmp31Result = null;
          if (true === tmp15) {
            const obj20 = {
              accessibilityRole: "button",
              accessibilityLabel: null,
              hitSlop: 8,
              disabled: null,
              onPress: null,
              style: null,
              children: null,
            };
            const intl2 = tmp2(1126).intl;
            obj20.accessibilityLabel = intl2.string(tmp2(1126).t.wzzjk9);
            obj20.disabled = pending;
            obj20.onPress = refresh;
            obj20.style = tmp.refresh;
            const obj21 = { size: "xs", color: tmp9(587).colors.TEXT_MUTED };
            const items6 = [closure_9(tmp2(11364).RetryIcon, obj21)];
            const obj22 = { variant: "text-xs/medium", color: "text-muted", children: null };
            const intl3 = tmp2(1126).intl;
            obj22.children = intl3.string(tmp2(1126).t.wzzjk9);
            items6[1] = closure_9(tmp2(4886).Text, obj22);
            obj20.children = items6;
            tmp31Result = closure_10(tmp2(5909).PressableOpacity, obj20);
          }
          items5[3] = tmp31Result;
          obj18.children = items5;
          tmp31Result2 = closure_10(tmp9(6706), obj18);
          const tmp9Result2 = tmp9(6706);
        }
      }
      return tmp31Result2;
    };
