// discord_app/modules/guild_profile/native/components/GuildProfileActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import GuildProfileActionCreators from "../../GuildProfileActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildProfileStore from "../../GuildProfileStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const GuildProfileFetchStatus = fn(9262).GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = fn(9411).INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = fn(1085).VerticalGradient;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  loadingContainer: { paddingTop: 40 },
  footerContainer: { paddingHorizontal: 16, paddingVertical: 40 },
  scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
};
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(analyticsLocations[9]).c(53);
      guildId = guildId.guildId;
      ({ context, inviteKey } = guildId);
      const tmp4 = closure_12();
      const obj = guildId(analyticsLocations[9]);
      const tmp6 = fetchGuildProfile(analyticsLocations[10])();
      const guildProfile1 = guildId(analyticsLocations[11]).useGuildProfile(guildId);
      ({ guildProfile, fetchGuildProfile } = guildProfile1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildProfileStore];
        cResult[0] = items;
        let first = items;
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
      const obj2 = guildId(analyticsLocations[11]);
      const stateFromStores = guildId(analyticsLocations[12]).useStateFromStores(first, E);
      const tmpResult = guildId(analyticsLocations[12]);
      const token = guildId(analyticsLocations[13]).useToken(
        fetchGuildProfile(tmp2[7]).colors.INTERACTIVE_TEXT_HOVER,
        tmp6,
      );
      const tmpResult4 = guildId(analyticsLocations[13]);
      const bottomSheetRef1 = guildId(analyticsLocations[14]).useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      const tmpResult5 = guildId(analyticsLocations[14]);
      analyticsLocations = fetchGuildProfile(analyticsLocations[15])(
        fetchGuildProfile(tmp2[16]).GUILD_PROFILE,
      ).analyticsLocations;
      const tmp5Result = fetchGuildProfile(analyticsLocations[15]);
      const token1 = guildId(analyticsLocations[13]).useToken(fetchGuildProfile(tmp2[7]).colors.BACKGROUND_BASE_LOW);
      if (cResult[3] === analyticsLocations) {
        class E {
          constructor() {
            return closure_6.getErrorCode(guildId);
          }
        }
        const effect = noop.useEffect(G, items2);
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
          let tmp20 = items1;
        } else {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          tmp20 = cResult[11];
        }
        const effect1 = noop.useEffect(H, tmp20);
        if (guildProfile1.fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          const tmp24 = closure_10(closure_5, { animating: true, size: "large" });
          cResult[12] = tmp24;
          const tmp22 = tmp24;
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
          const obj3 = { style: tmp4.loadingContainer, children: tmp22 };
          const tmp27 = closure_10(closure_4, obj3);
          cResult[13] = tmp4.loadingContainer;
          cResult[14] = tmp27;
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
      items2 = [guildId, analyticsLocations];
      cResult[3] = analyticsLocations;
      cResult[4] = guildId;
      cResult[5] = G;
      cResult[6] = items2;
      const tmpResult6 = guildId(analyticsLocations[13]);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      fetchGuildProfile = undefined;
      let analyticsLocations;
      ({ context, inviteKey } = guildId);
      const tmp = closure_12();
      const tmp4 = fetchGuildProfile(analyticsLocations[10])();
      const guildProfile1 = guildId(analyticsLocations[11]).useGuildProfile(guildId);
      ({ guildProfile, fetchGuildProfile } = guildProfile1);
      const fetchStatus = guildProfile1.fetchStatus;
      let obj = guildId(analyticsLocations[11]);
      let items = [GuildProfileStore];
      const stateFromStores = guildId(analyticsLocations[12]).useStateFromStores(items, () =>
        GuildProfileStore.getErrorCode(guildId),
      );
      const obj2 = guildId(analyticsLocations[12]);
      const token = guildId(analyticsLocations[13]).useToken(
        fetchGuildProfile(analyticsLocations[7]).colors.INTERACTIVE_TEXT_HOVER,
        tmp4,
      );
      const obj3 = guildId(analyticsLocations[13]);
      const bottomSheetRef1 = guildId(analyticsLocations[14]).useBottomSheetRef();
      ({ bottomSheetClose, bottomSheetRef } = bottomSheetRef1);
      const obj4 = guildId(analyticsLocations[14]);
      analyticsLocations = fetchGuildProfile(analyticsLocations[15])(
        fetchGuildProfile(analyticsLocations[16]).GUILD_PROFILE,
      ).analyticsLocations;
      const tmp10 = fetchGuildProfile(analyticsLocations[15]);
      const token1 = guildId(analyticsLocations[13]).useToken(
        fetchGuildProfile(analyticsLocations[7]).colors.BACKGROUND_BASE_LOW,
      );
      const items1 = [guildId, analyticsLocations];
      const effect = token1.useEffect(() => {
        const result = GuildProfileActionCreators.trackGuildProfileViewed(guildId, analyticsLocations);
      }, items1);
      const items2 = [fetchGuildProfile];
      const items3 = [fetchGuildProfile];
      const callback = token1.useCallback(() => {
        fetchGuildProfile(true);
      }, items2);
      const effect1 = token1.useEffect(() => {
        fetchGuildProfile();
      }, items3);
      if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
        if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
          if (null == guildProfile) {
            if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
              let tmp19 = closure_10(tmp2(tmp3[18]), {});
              const obj7 = { size: "lg", text: null, onPress: null };
              const intl2 = tmp5(tmp3[19]).intl;
              obj7.text = intl2.string(tmp5(tmp3[19]).t.cpT0Cq);
              obj7.onPress = bottomSheetClose;
              let tmp18 = closure_10(tmp5(tmp3[20]).Button, obj7);
              let tmp20 = closure_10;
            }
          }
          if (null == guildProfile) {
            const obj8 = { onRetry: callback };
            tmp19 = closure_10(tmp2(tmp3[21]), obj8);
            const obj9 = { size: "lg", text: null, onPress: null };
            const intl = tmp5(tmp3[19]).intl;
            obj9.text = intl.string(tmp5(tmp3[19]).t.cpT0Cq);
            obj9.onPress = bottomSheetClose;
            tmp18 = closure_10(tmp5(tmp3[20]).Button, obj9);
            tmp20 = closure_10;
          } else {
            const obj10 = { guildProfile };
            const obj11 = { profile: guildProfile, context, inviteKey };
            tmp18 = closure_10(tmp2(tmp3[23]), obj11);
            tmp19 = closure_10(tmp2(tmp3[22]), obj10);
            tmp20 = closure_10;
            const tmp17 = closure_10(tmp2(tmp3[22]), obj10);
          }
        }
        const items4 = [token1];
        const memo = obj6.useMemo(() => {
          const obj = _modDef683(token1);
          const items = [_modDef683(token1).alpha(0).hex(), token1];
          return items;
        }, items4);
        const obj12 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: null, children: null };
        const obj13 = {
          start: VerticalGradient.START,
          end: { x: 0, y: 0.5 },
          style: tmp.footerContainer,
          colors: memo,
          children: tmp18,
        };
        obj12.footer = tmp20(tmp2(tmp3[25]), obj13);
        const obj14 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp19 };
        const items5 = [tmp20(tmp5(tmp3[26]).BottomSheetScrollView, obj14)];
        const obj15 = { variant: "floating", tabStyle: null, onPress: null };
        const obj16 = { backgroundColor: token };
        obj15.tabStyle = obj16;
        obj15.onPress = bottomSheetClose;
        items5[1] = tmp20(tmp5(tmp3[27]).ActionSheetHeaderBar, obj15);
        obj12.children = items5;
        return closure_11(tmp5(tmp3[28]).BottomSheet, obj12);
      }
      const obj5 = guildId(analyticsLocations[13]);
      obj6 = token1;
      tmp19 = closure_10(closure_4, {
        style: tmp.loadingContainer,
        children: closure_10(closure_5, { animating: true, size: "large" }),
      });
      tmp18 = null;
      tmp20 = closure_10;
      const obj17 = {
        style: tmp.loadingContainer,
        children: closure_10(closure_5, { animating: true, size: "large" }),
      };
    };
