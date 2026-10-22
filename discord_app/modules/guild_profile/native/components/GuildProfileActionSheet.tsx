// discord_app/modules/guild_profile/native/components/GuildProfileActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import GuildProfileActionCreators from "../../GuildProfileActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildProfileStore from "../../GuildProfileStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const GuildProfileFetchStatus = fn(8954).GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = fn(9196).INVALID_ACCESS_ERROR_CODE;
const VerticalGradient = fn(1087).VerticalGradient;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4969);
let obj2 = {
  loadingContainer: { paddingTop: 40 },
  footerContainer: { paddingHorizontal: 16, paddingVertical: 40 },
  footerStack: { gap: 8 },
  scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
};
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildProfileActionSheet(guildId) {
      const cResult = guildId(analyticsLocations[9]).c(66);
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
        const fn = function y() {
          return GuildProfileStore.getErrorCode(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      const obj2 = guildId(analyticsLocations[11]);
      const stateFromStores = guildId(analyticsLocations[12]).useStateFromStores(first, tmp10);
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
        if (cResult[4] === guildId) {
          let tmp16 = cResult[5];
          let tmp17 = cResult[6];
        }
        const effect = noop.useEffect(tmp16, tmp17);
        if (cResult[7] !== fetchGuildProfile) {
          class V {
            constructor() {
              tmp = fetchGuildProfile(true);
              return;
            }
          }
          cResult[7] = fetchGuildProfile;
          cResult[8] = V;
        } else {
          class V {
            constructor() {
              tmp = fetchGuildProfile(true);
              return;
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
          let tmp21 = items1;
        } else {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
          tmp21 = cResult[11];
        }
        const effect1 = noop.useEffect(H, tmp21);
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
          const tmp25 = closure_10(closure_5, { animating: true, size: "large" });
          cResult[12] = tmp25;
          const tmp23 = tmp25;
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
          const obj3 = { style: tmp4.loadingContainer, children: tmp23 };
          const tmp28 = closure_10(closure_4, obj3);
          cResult[13] = tmp4.loadingContainer;
          cResult[14] = tmp28;
        } else {
          class H {
            constructor() {
              tmp = fetchGuildProfile();
              return;
            }
          }
        }
      }
      class B {
        constructor() {
          obj = closure_0(closure_2[17]);
          result = obj.trackGuildProfileViewed(guildId, analyticsLocations);
          return;
        }
      }
      const items2 = [guildId, analyticsLocations];
      cResult[3] = analyticsLocations;
      cResult[4] = guildId;
      cResult[5] = B;
      cResult[6] = items2;
      tmp17 = items2;
      tmp16 = B;
      const tmpResult6 = guildId(analyticsLocations[13]);
    }
  : function GuildProfileActionSheet(guildId) {
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
              let tmp18 = closure_10(tmp2(tmp3[18]), {});
              const obj7 = { style: tmp.footerStack, children: null };
              const obj8 = { size: "lg", text: null, onPress: null };
              const intl2 = tmp5(tmp3[19]).intl;
              obj8.text = intl2.string(tmp5(tmp3[19]).t.cpT0Cq);
              obj8.onPress = bottomSheetClose;
              const items4 = [closure_10(tmp5(tmp3[20]).Button, obj8)];
              const obj9 = { guildId };
              items4[1] = closure_10(tmp2(tmp3[21]), obj9);
              obj7.children = items4;
              let tmp30Result = closure_11(closure_4, obj7);
              let tmp19 = closure_10;
            }
          }
          if (null == guildProfile) {
            const obj10 = { onRetry: callback };
            tmp18 = closure_10(tmp2(tmp3[22]), obj10);
            const obj11 = { size: "lg", text: null, onPress: null };
            const intl = tmp5(tmp3[19]).intl;
            obj11.text = intl.string(tmp5(tmp3[19]).t.cpT0Cq);
            obj11.onPress = bottomSheetClose;
            tmp30Result = closure_10(tmp5(tmp3[20]).Button, obj11);
            tmp19 = closure_10;
          } else {
            const obj12 = { guildProfile };
            const obj13 = { style: tmp.footerStack, children: null };
            const obj14 = { profile: guildProfile, context, inviteKey };
            const items5 = [closure_10(tmp2(tmp3[24]), obj14)];
            let tmp28Result = null != guildProfile.tag;
            if (tmp28Result) {
              const obj15 = { guildId };
              tmp28Result = closure_10(tmp2(tmp3[21]), obj15);
            }
            items5[1] = tmp28Result;
            obj13.children = items5;
            tmp30Result = closure_11(closure_4, obj13);
            tmp18 = closure_10(tmp2(tmp3[23]), obj12);
            tmp19 = closure_10;
            const tmp29 = closure_10(tmp2(tmp3[23]), obj12);
          }
        }
        const items6 = [token1];
        const memo = obj6.useMemo(() => {
          const obj = _modDef683(token1);
          const items = [_modDef683(token1).alpha(0).hex(), token1];
          return items;
        }, items6);
        const obj16 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, footer: null, children: null };
        const obj17 = {
          start: VerticalGradient.START,
          end: { x: 0, y: 0.5 },
          style: tmp.footerContainer,
          colors: memo,
          children: tmp30Result,
        };
        obj16.footer = tmp19(tmp2(tmp3[26]), obj17);
        const obj18 = { enableFooterMarginAdjustment: true, style: tmp.scrollView, children: tmp18 };
        const items7 = [tmp19(tmp5(tmp3[27]).BottomSheetScrollView, obj18)];
        const obj19 = { variant: "floating", tabStyle: null, onPress: null };
        const obj20 = { backgroundColor: token };
        obj19.tabStyle = obj20;
        obj19.onPress = bottomSheetClose;
        items7[1] = tmp19(tmp5(tmp3[28]).ActionSheetHeaderBar, obj19);
        obj16.children = items7;
        return closure_11(tmp5(tmp3[29]).BottomSheet, obj16);
      }
      const obj5 = guildId(analyticsLocations[13]);
      obj6 = token1;
      tmp18 = closure_10(closure_4, {
        style: tmp.loadingContainer,
        children: closure_10(closure_5, { animating: true, size: "large" }),
      });
      tmp30Result = null;
      tmp19 = closure_10;
      const obj21 = {
        style: tmp.loadingContainer,
        children: closure_10(closure_5, { animating: true, size: "large" }),
      };
    };
