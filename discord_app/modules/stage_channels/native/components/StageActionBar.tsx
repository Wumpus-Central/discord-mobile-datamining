// discord_app/modules/stage_channels/native/components/StageActionBar.tsx
import StageActionBarButtons from "StageActionBarButtons.tsx";
import ChannelCallActionBar from "../../../video_calls/native/components/ChannelCallActionBar.tsx";
import ChannelCallMicButton from "../../../video_calls/native/components/ChannelCallMicButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let closure_8 = createStyles.createStyles({
  container: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  let actionBarPrimaryButton;
  let tmp = closure_8();
  let tmp2 = channel;
  const tmp3 = actionBarPrimaryButton;
  const canModerateRequestToSpeak = channel(actionBarPrimaryButton[4]).useCanModerateRequestToSpeak(channel.id);
  let obj = channel(actionBarPrimaryButton[4]);
  actionBarPrimaryButton = channel(actionBarPrimaryButton[5]).useActionBarPrimaryButton({ channel });
  let obj2 = channel(actionBarPrimaryButton[5]);
  const getActionBarHeight = channel(actionBarPrimaryButton[6]).useGetActionBarHeight(channel.id);
  const tmp7 = canModerateRequestToSpeak(actionBarPrimaryButton[7])(channel.id);
  noop = tmp7;
  let obj3 = channel(actionBarPrimaryButton[6]);
  const tmp8 = channel(actionBarPrimaryButton[8]).useShowStageMusicMuteButton(channel.id) && !tmp7;
  closure_4 = tmp8;
  let obj4 = channel(actionBarPrimaryButton[8]);
  const isStageVideoEnabledResult = tmp2(tmp3[9]).isStageVideoEnabled(channel.guild_id);
  c5 = isStageVideoEnabledResult;
  let items = [actionBarPrimaryButton, channel];
  const callback = noop.useCallback((isSmallSize) => {
    if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
      const obj2 = { channel, isSmallSize };
      let tmp4 = hasOwnProperty(ChannelCallActionBar.DisconnectStreamButton, obj2);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_CALL) {
        const obj = { channel, isSmallSize };
        tmp4 = hasOwnProperty(StageActionBarButtons.DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  let items1 = [tmp8, channel, canModerateRequestToSpeak, tmp7, callback, isStageVideoEnabledResult];
  let obj5 = {
    pointerEvents: "box-none",
    style: null,
    children: noop.useMemo(() => {
      if (closure_3) {
        let tmp24 = isSmallSize;
        if (isSmallSize) {
          const obj2 = { channel, isSmallSize };
          tmp24 = hasOwnProperty(ChannelCallActionBar.VideoButton, obj2);
        }
        const items = [tmp24, , , ,];
        const obj3 = { channel, isSmallSize };
        items[1] = hasOwnProperty(ChannelCallMicButton.ChannelCallMicButton, obj3);
        const obj4 = { children: null };
        const obj5 = { channel, isSmallSize };
        items[2] = hasOwnProperty(
          canModerateRequestToSpeak ? obj4.RequestToSpeakListButton : obj4.MoveToAudienceButton,
          obj5,
        );
        const obj6 = { channel, isSmallSize };
        items[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj6);
        items[4] = callback(isSmallSize);
        obj4.children = items;
        React5(timestampProducer, obj4);
        const tmp37 = canModerateRequestToSpeak ? obj4.RequestToSpeakListButton : obj4.MoveToAudienceButton;
      } else {
        let tmp = closure_4;
        let tmp2 = closure_4;
        if (closure_4) {
          tmp2 = canModerateRequestToSpeak;
        }
        if (tmp) {
          const obj = { channel, isSmallSize: tmp2 };
          tmp = hasOwnProperty(StageActionBarButtons.MusicMuteButton, obj);
        }
        const items1 = [tmp, , , ,];
        const obj7 = { channel, isSmallSize: tmp2 };
        items1[1] = hasOwnProperty(StageActionBarButtons.RequestToSpeakButton, obj7);
        let tmp13 = canModerateRequestToSpeak;
        if (canModerateRequestToSpeak) {
          const obj8 = { channel, isSmallSize: tmp2 };
          tmp13 = hasOwnProperty(StageActionBarButtons.RequestToSpeakListButton, obj8);
        }
        const obj9 = { children: null };
        items1[2] = tmp13;
        const obj10 = { channel, isSmallSize: tmp2 };
        items1[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj10);
        items1[4] = callback(tmp2);
        obj9.children = items1;
        return React5(timestampProducer, obj9);
      }
    }, items1),
  };
  const items2 = [tmp.container, { height: getActionBarHeight }];
  obj5.style = items2;
  return c5(closure_4, obj5);
});
