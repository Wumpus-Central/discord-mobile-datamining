// discord_app/modules/guild_profile/native/components/GuildProfileSheetBody.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildProfileActionCreators from "../../GuildProfileActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildProfileStore from "../../GuildProfileStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildProfileFetchStatus = fn(9144).GuildProfileFetchStatus;
const INVALID_ACCESS_ERROR_CODE = fn(9396).INVALID_ACCESS_ERROR_CODE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { loadingContainer: { paddingTop: nativeDefault.space.PX_40 }, footerStack: null };
let obj3 = { paddingTop: nativeDefault.space.PX_40 };
obj2.footerStack = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileSheetBody.tsx");

export default function GuildProfileSheetBody(guildId) {
  guildId = guildId.guildId;
  ({ onClose, banner } = guildId);
  fetchGuildProfile = undefined;
  let analyticsLocations;
  ({ disableNameNavigation, footer, children } = guildId);
  const tmp = closure_11();
  const guildProfile1 = guildId(analyticsLocations[7]).useGuildProfile(guildId);
  ({ guildProfile, fetchGuildProfile } = guildProfile1);
  const fetchStatus = guildProfile1.fetchStatus;
  const obj = guildId(analyticsLocations[7]);
  items = [GuildProfileStore];
  const stateFromStores = guildId(analyticsLocations[8]).useStateFromStores(items, () =>
    GuildProfileStore.getErrorCode(guildId),
  );
  const obj2 = guildId(analyticsLocations[8]);
  analyticsLocations = fetchGuildProfile(analyticsLocations[9])(
    fetchGuildProfile(analyticsLocations[10]).GUILD_PROFILE,
  ).analyticsLocations;
  const items1 = [guildId, analyticsLocations];
  const effect = noop.useEffect(() => {
    const result = GuildProfileActionCreators.trackGuildProfileViewed(guildId, analyticsLocations);
  }, items1);
  const items2 = [fetchGuildProfile];
  const items3 = [fetchGuildProfile];
  const callback = noop.useCallback(() => {
    fetchGuildProfile(true);
  }, items2);
  const effect1 = noop.useEffect(() => {
    fetchGuildProfile();
  }, items3);
  if (fetchStatus !== GuildProfileFetchStatus.NOT_FETCHED) {
    if (fetchStatus !== GuildProfileFetchStatus.FETCHING) {
      if (null == guildProfile) {
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          let tmp18Result = closure_9(tmp6(tmp3[12]), {});
          let tmp20 = closure_9;
        } else {
          const obj3 = { onRetry: callback };
          tmp18Result = closure_9(tmp6(tmp3[13]), obj3);
          tmp20 = closure_9;
        }
        if (stateFromStores === INVALID_ACCESS_ERROR_CODE) {
          const obj4 = { style: tmp.footerStack, children: null };
          const obj5 = { size: "lg", text: null, onPress: null };
          const intl2 = tmp2(tmp3[15]).intl;
          obj5.text = intl2.string(tmp2(tmp3[15]).t.cpT0Cq);
          obj5.onPress = onClose;
          const items4 = [tmp20(tmp2(tmp3[14]).Button, obj5)];
          const obj6 = { guildId };
          items4[1] = tmp20(tmp6(tmp3[16]), obj6);
          obj4.children = items4;
          let tmp20Result = closure_10(closure_5, obj4);
        } else {
          const obj7 = { size: "lg", text: null, onPress: null };
          const intl = tmp2(tmp3[15]).intl;
          obj7.text = intl.string(tmp2(tmp3[15]).t.cpT0Cq);
          obj7.onPress = onClose;
          tmp20Result = tmp20(tmp2(tmp3[14]).Button, obj7);
        }
        let footerResult = tmp20Result;
        let tmp11Result = tmp18Result;
      } else {
        const obj8 = { guildProfile, banner: null, disableNameNavigation: null };
        let bannerResult;
        if (banner != null) {
          bannerResult = banner(guildProfile);
        }
        obj8.banner = bannerResult;
        obj8.disableNameNavigation = disableNameNavigation;
        tmp11Result = closure_9(tmp6(tmp3[17]), obj8);
        footerResult = footer(guildProfile);
        const tmp6Result = tmp6(tmp3[17]);
      }
    }
    return children(tmp11Result, footerResult);
  }
  const tmp7 = fetchGuildProfile(analyticsLocations[9]);
  tmp11Result = closure_9(closure_5, {
    style: tmp.loadingContainer,
    children: closure_9(closure_4, { animating: true, size: "large" }),
  });
  const obj9 = { style: tmp.loadingContainer, children: closure_9(closure_4, { animating: true, size: "large" }) };
}
