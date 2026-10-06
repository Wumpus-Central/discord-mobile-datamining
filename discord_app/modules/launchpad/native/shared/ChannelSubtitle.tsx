// === Module 17433: ChannelSubtitle ===

// Module 17433 (ChannelSubtitle)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11709 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 16195 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16853 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const jsx = Fragment.jsx;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let connected;
  let flag;
  let guildId;
  let muted;
  let str2;
  let subtitle;
  let textProps;
  const obj = react2;
  const cResult = obj.c(14);
  ({ muted, connected, channelId, guildId, subtitle, textProps } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === connected) {
      if (cResult[2] === guildId) {
        if (cResult[3] === muted) {
          if (cResult[4] === subtitle) {
            let tmp4;
            let tmp5;
            let tmp6;
            let tmp7;
            if (cResult[5] === textProps) {
              tmp4 = cResult[6];
              tmp5 = cResult[7];
              tmp6 = cResult[8];
              tmp7 = cResult[9];
            }
            const _Symbol = Symbol;
            if (tmp7 === Symbol.for("react.early_return_sentinel")) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === tmp5) {
                  let tmp17;
                  if (cResult[12] === tmp6) {
                    tmp17 = cResult[13];
                  }
                  tmp7 = tmp17;
                }
              }
              const merged = Object.assign(tmp5);
              const tmp22 = <tmp4>{tmp6}</tmp4>;
              cResult[10] = tmp4;
              cResult[11] = tmp5;
              cResult[12] = tmp6;
              cResult[13] = tmp22;
              tmp17 = tmp22;
            }
            return tmp7;
          }
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = getChannelSubtitleData;
  const channelSubtitleData = tmpResult.getChannelSubtitleData(subtitle);
  let tmp10 = null;
  let result;
  let tmp12;
  let tmp13;
  if (null != channelSubtitleData) {
    const tmp14 = "voice" === channelSubtitleData.type && connected;
    const Text = Text_Text.Text;
    const obj3 = { content: channelSubtitleData.subtitle, muted: flag, channelId, guildId, disableAnimatedEmoji: !tmp14, color: str2 };
    flag = muted;
    const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
    MessagePreviewMarkup;
    if (muted == null) {
      flag = false;
    }
    str2 = "text-subtle";
    if (muted) {
      str2 = "text-muted";
    }
    result = renderMessagePreviewMarkup(obj3);
    tmp10 = forResult;
    tmp12 = textProps;
    tmp13 = Text;
  }
  cResult[0] = channelId;
  cResult[1] = connected;
  cResult[2] = guildId;
  cResult[3] = muted;
  cResult[4] = subtitle;
  cResult[5] = textProps;
  cResult[6] = tmp13;
  cResult[7] = tmp12;
  cResult[8] = result;
  cResult[9] = tmp10;
  tmp7 = tmp10;
  tmp6 = result;
  tmp5 = tmp12;
  tmp4 = tmp13;
}) : ((arg0) => {
  let channelId;
  let connected;
  let flag;
  let guildId;
  let muted;
  let str;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  const obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    const tmp4 = "voice" === channelSubtitleData.type && connected;
    const Text = Text_Text.Text;
    const merged = Object.assign(textProps);
    const obj3 = { content: channelSubtitleData.subtitle, muted: flag, channelId, guildId, disableAnimatedEmoji: !tmp4, color: str };
    flag = muted;
    const renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
    MessagePreviewMarkup;
    if (muted == null) {
      flag = false;
    }
    str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    return <Text>{renderMessagePreviewMarkup(obj3)}</Text>;
  }
});
let result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let muted;
  let obj;
  let subtitle;
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let tmp9;
    const obj2 = { variant: getLayoutStylesDefault().messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75, style: obj };
    let num = 1;
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    obj = { opacity: num };
    if (typeof subtitle === "string") {
      const Text = Text_Text.Text;
      const merged = Object.assign(obj2);
      tmp9 = <Text>{subtitle}</Text>;
    } else {
      tmp9 = <closure_5 channelId={tmp} guildId={tmp2} subtitle={subtitle} muted={muted} connected={tmp3} textProps={obj2} />;
    }
    return tmp9;
  }
};