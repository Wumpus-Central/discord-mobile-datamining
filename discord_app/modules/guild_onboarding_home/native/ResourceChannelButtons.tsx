// discord_app/modules/guild_onboarding_home/native/ResourceChannelButtons.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildOnboardingHomeActionCreators from "../GuildOnboardingHomeActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
const obj2 = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  buttonWrapper: { flex: 1 },
  spacer: { width: 8 },
  iconColor: null,
};
let obj3 = {
  display: "flex",
  flexDirection: "row",
  padding: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.iconColor = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  channel = channel.channel;
  first = undefined;
  noop = undefined;
  const navigation = channel(first[6]).useNavigation();
  const tmp4 = closure_8();
  const obj = channel(first[6]);
  [first] = channel(first[7]).usePreviousAndNextResourceChannel(channel.guild_id, channel.id);
  _slicedToArray = tmp7;
  const items = [channel.guild_id, navigation];
  noop = noop.useCallback((channelId) => {
    navigation.goBack();
    const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(
      channel.guild_id,
      channelId,
    );
  }, items);
  if (null != first) {
    const obj3 = { style: tmp4.wrapper, children: null };
    let tmp11 = null != first;
    if (tmp11) {
      const obj4 = { style: tmp4.buttonWrapper, children: null };
      const obj5 = { variant: "secondary", text: first.title, icon: null, onPress: null, grow: true };
      const obj6 = { color: tmp4.iconColor.color, source: navigation(tmp2[11]) };
      obj5.icon = closure_6(tmp(tmp2[10]).Icon, obj6);
      obj5.onPress = function onPress() {
        return closure_4(first.channelId);
      };
      obj4.children = closure_6(tmp(tmp2[9]).Button, obj5);
      tmp11 = closure_6(View, obj4);
    }
    const items1 = [tmp11, ,];
    let tmp14 = null != first && null != tmp7;
    if (tmp14) {
      const obj7 = { style: tmp4.spacer };
      tmp14 = closure_6(View, obj7);
    }
    items1[1] = tmp14;
    let tmp16 = null != tmp7;
    if (tmp16) {
      const obj8 = { style: tmp4.buttonWrapper, children: null };
      const obj9 = { text: tmp7.title, icon: null, iconPosition: "end", onPress: null, grow: true };
      const obj10 = { color: tmp4.iconColor.color, source: navigation(tmp2[12]) };
      obj9.icon = closure_6(tmp(tmp2[10]).Icon, obj10);
      obj9.onPress = function onPress() {
        return closure_4(channelId.channelId);
      };
      obj8.children = closure_6(tmp(tmp2[9]).Button, obj9);
      tmp16 = closure_6(View, obj8);
    }
    items1[2] = tmp16;
    obj3.children = items1;
    let tmp9Result = closure_7(View, obj3);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
}
