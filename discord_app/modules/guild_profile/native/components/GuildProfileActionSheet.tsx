// discord_app/modules/guild_profile/native/components/GuildProfileActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import Constants from "../../../../Constants.tsx";
import GuildProfileStore2 from "../../GuildProfileStore.tsx";
import GuildProfileActionCreators from "../../GuildProfileActionCreators.tsx";
import GuildProfileConstants from "../../GuildProfileConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildProfileStore = GuildProfileStore2;
let BottomSheet, guildId;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const GuildProfileFetchStatus = GuildProfileStore2.GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = GuildProfileConstants.INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = {
  loadingContainer: { paddingTop: 40 },
  footerContainer: { paddingHorizontal: 16, paddingVertical: 40 },
  scrollView: obj2,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let analyticsLocations;
      let bottomSheetClose;
      let bottomSheetRef;
      let context;
      let fetchGuildProfile;
      let first;
      let guildProfile;
      let inviteKey;
      let items3;
      let obj = guildId(analyticsLocations[9]);
      const cResult = obj.c(53);
      guildId = guildId.guildId;
      ({ context, inviteKey } = guildId);
      const tmp4 = closure_12();
      const tmp6 = fetchGuildProfile(analyticsLocations[10])();
      const obj2 = guildId(analyticsLocations[11]);
      const guildProfile1 = obj2.useGuildProfile(guildId);
      ({ guildProfile, fetchGuildProfile } = guildProfile1);
      const fetchStatus = guildProfile1.fetchStatus;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class E {
          constructor() {
            return closure_6.getErrorCode(guildId);
          }
        }
        cResult[1] = guildId;
        cResult[2] = E;
      } else {
        class E {
          constructor() {
            return closure_6.getErrorCode(guildId);
          }
        }
      }
      const tmpResult = guildId(analyticsLocations[12]);
      const stateFromStores = tmpResult.useStateFromStores(first, E);
      const tmpResult4 = guildId(analyticsLocations[13]);
      const token = tmpResult4.useToken(fetchGuildProfile(tmp2[7]).colors.INTERACTIVE_TEXT_HOVER, tmp6);
      const tmpResult5 = guildId(analyticsLocations[14]);
      const bottomSheetRef1 = tmpResult5.useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      const tmp5Result = fetchGuildProfile(analyticsLocations[15]);
      analyticsLocations = tmp5Result(fetchGuildProfile(tmp2[16]).GUILD_PROFILE).analyticsLocations;
      const tmpResult6 = guildId(analyticsLocations[13]);
      const token1 = tmpResult6.useToken(fetchGuildProfile(tmp2[7]).colors.BACKGROUND_BASE_LOW);
      if (cResult[3] === analyticsLocations) {
        let tmp20;
        let tmp24;
        class E {
          constructor() {
            return closure_6.getErrorCode(guildId);
          }
        }
        const effect = react.useEffect(G, items3);
        if (cResult[7] !== fetchGuildProfile) {
          class E {
            constructor() {
              return closure_6.getErrorCode(guildId);
            }
          }
          cResult[7] = fetchGuildProfile;
          cResult[8] = tmp18;
        } else {
          class E {
            constructor() {
              return closure_6.getErrorCode(guildId);
            }
          }
        }
        if (cResult[9] !== fetchGuildProfile) {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          const items1 = [fetchGuildProfile];
          cResult[9] = fetchGuildProfile;
          cResult[10] = H;
          cResult[11] = items1;
          tmp20 = items1;
        } else {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          tmp20 = cResult[11];
        }
        const effect1 = react.useEffect(H, tmp20);
        if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          if (cResult[30] !== token1) {
            class H {
              constructor() {
                tmp = fetchGuildProfile();
                return;
              }
            }
            const alphaResult = obj9.alpha(0);
            cResult[30] = token1;
            cResult[31] = alphaResult.hex();
            const hexResult = alphaResult.hex();
          } else {
            class H {
              constructor() {
                tmp = fetchGuildProfile();
                return;
              }
            }
          }
          if (cResult[32] === token1) {
            class H {
              constructor() {
                tmp = fetchGuildProfile();
                return;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
              class H {
                constructor() {
                  tmp = fetchGuildProfile();
                  return;
                }
              }
              cResult[35] = tmp34;
            } else {
              class H {
                constructor() {
                  tmp = fetchGuildProfile();
                  return;
                }
              }
            }
            if (cResult[36] === tmp32) {
              class H {
                constructor() {
                  tmp = fetchGuildProfile();
                  return;
                }
              }
            }
            const obj3 = {
              start: VerticalGradient.START,
              end: tmp34,
              style: tmp4.footerContainer,
              colors: tmp32,
              children: tmp23,
            };
            cResult[36] = tmp32;
            cResult[37] = tmp23;
            cResult[38] = tmp4.footerContainer;
            cResult[39] = closure_10(fetchGuildProfile(analyticsLocations[25]), obj3);
            const tmp38 = closure_10(fetchGuildProfile(analyticsLocations[25]), obj3);
          }
          const items2 = [tmp30, token1];
          cResult[32] = token1;
          cResult[33] = tmp30;
          cResult[34] = items2;
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          const tmp26 = closure_10(closure_5, { animating: true, size: "large" });
          cResult[12] = tmp26;
          tmp24 = tmp26;
        } else {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
        }
        if (cResult[13] !== tmp4.loadingContainer) {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          const obj4 = { style: tmp4.loadingContainer, children: tmp24 };
          const tmp29 = closure_10(closure_4, obj4);
          cResult[13] = tmp4.loadingContainer;
          cResult[14] = tmp29;
        } else {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
        }
      }
      class G {
        constructor() {
          obj = closure_0(closure_2[17]);
          result = obj.trackGuildProfileViewed(guildId, analyticsLocations);
          return;
        }
      }
      items3 = [guildId, analyticsLocations];
      cResult[3] = analyticsLocations;
      cResult[4] = guildId;
      cResult[5] = G;
      cResult[6] = items3;
    }
  : (guildId) => {
      let bottomSheetClose;
      let bottomSheetRef;
      let context;
      let fetchGuildProfile;
      let guildProfile;
      let intl;
      let intl2;
      let inviteKey;
      let items5;
      let obj13;
      let obj16;
      guildId = guildId.guildId;
      fetchGuildProfile = undefined;
      let analyticsLocations;
      ({ context, inviteKey } = guildId);
      const tmp = closure_12();
      const tmp4 = fetchGuildProfile(analyticsLocations[10])();
      let obj = guildId(analyticsLocations[11]);
      const guildProfile1 = obj.useGuildProfile(guildId);
      ({ guildProfile, fetchGuildProfile } = guildProfile1);
      const fetchStatus = guildProfile1.fetchStatus;
      let items = [GuildProfileStore];
      const obj2 = guildId(analyticsLocations[12]);
      const stateFromStores = obj2.useStateFromStores(items, () => GuildProfileStore.getErrorCode(guildId));
      const obj3 = guildId(analyticsLocations[13]);
      const token = obj3.useToken(fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER, tmp4);
      const obj4 = guildId(analyticsLocations[14]);
      const bottomSheetRef1 = obj4.useBottomSheetRef();
      ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef1);
      const tmp10 = fetchGuildProfile(analyticsLocations[15]);
      analyticsLocations = tmp10(fetchGuildProfile(analyticsLocations[16]).GUILD_PROFILE).analyticsLocations;
      const obj5 = guildId(analyticsLocations[13]);
      const token1 = obj5.useToken(fetchGuildProfile(analyticsLocations[7]).colors.BACKGROUND_BASE_LOW);
      const items1 = [guildId, analyticsLocations];
      const effect = token1.useEffect(() => {
        const obj = GuildProfileActionCreators;
        const result = obj.trackGuildProfileViewed(guildId, analyticsLocations);
      }, items1);
      const items2 = [fetchGuildProfile];
      const items3 = [fetchGuildProfile];
      const callback = token1.useCallback(() => {
        fetchGuildProfile(true);
      }, items2);
      const effect1 = token1.useEffect(() => {
        fetchGuildProfile();
      }, items3);
      const obj6 = token1;
      if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
        let tmp19;
        let tmp18;
        let tmp20;
        if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
          if (null == guildProfile) {
            if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
              tmp19 = closure_10(tmp2(tmp3[18]), {});
              const obj7 = {
                size: "lg",
                text: intl2.string(guildId(analyticsLocations[19]).t.cpT0Cq),
                onPress: bottomSheetClose,
              };
              const Button2 = tmp5(tmp3[20]).Button;
              intl2 = tmp5(tmp3[19]).intl;
              tmp18 = closure_10(Button2, obj7);
              tmp20 = closure_10;
            }
          }
          if (null == guildProfile) {
            const obj8 = { onRetry: callback };
            tmp19 = closure_10(tmp2(tmp3[21]), obj8);
            const obj9 = {
              size: "lg",
              text: intl.string(guildId(analyticsLocations[19]).t.cpT0Cq),
              onPress: bottomSheetClose,
            };
            const Button = tmp5(tmp3[20]).Button;
            intl = tmp5(tmp3[19]).intl;
            tmp18 = closure_10(Button, obj9);
            tmp20 = closure_10;
          } else {
            const obj10 = { guildProfile };
            const obj11 = { profile: guildProfile, context, inviteKey };
            const tmp17 = closure_10(fetchGuildProfile(analyticsLocations[22]), obj10);
            tmp18 = closure_10(tmp2(tmp3[23]), obj11);
            tmp19 = tmp17;
            tmp20 = closure_10;
          }
        }
        const items4 = [token1];
        const memo = obj6.useMemo(() => {
          const items = [,];
          const obj = _modDef683(token1);
          const alphaResult = obj.alpha(0);
          items[0] = alphaResult.hex();
          items[1] = token1;
          return items;
        }, items4);
        const obj12 = {
          ref: bottomSheetRef,
          scrollable: true,
          handleDisabled: true,
          footer: tmp20(fetchGuildProfile(analyticsLocations[25]), obj13),
          children: items5,
        };
        BottomSheet = tmp5(tmp3[28]).BottomSheet;
        obj13 = {
          start: VerticalGradient.START,
          end: { x: 0, y: 0.5 },
          style: tmp.footerContainer,
          colors: memo,
          children: tmp18,
        };
        const obj14 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp19 };
        items5 = [tmp20(guildId(analyticsLocations[26]).BottomSheetScrollView, obj14)];
        const obj15 = { variant: "floating", tabStyle: obj16, onPress: bottomSheetClose };
        obj16 = { backgroundColor: token };
        items5[1] = tmp20(guildId(analyticsLocations[27]).ActionSheetHeaderBar, obj15);
        return closure_11(BottomSheet, obj12);
      }
      const obj17 = {
        style: tmp.loadingContainer,
        children: closure_10(closure_5, { animating: true, size: "large" }),
      };
      tmp19 = closure_10(closure_4, obj17);
      tmp18 = null;
      tmp20 = closure_10;
    };
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default tmp4;
