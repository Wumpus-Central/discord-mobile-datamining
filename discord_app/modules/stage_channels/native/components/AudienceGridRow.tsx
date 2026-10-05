// === Module 9751: AudienceGridRow ===

// Module 9751 (AudienceGridRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5571 */;
import BlankAudienceTileDefault from "BlankAudienceTile" /* 9752 */;
import AudienceTileDefault from "AudienceTile" /* 9753 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let count;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const MAX_AUDIENCE_ROW_LIMIT = StageChannelsConstants.MAX_AUDIENCE_ROW_LIMIT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ rowContainer: { flex: 1, flexDirection: "row", marginVertical: 16, paddingHorizontal: 4, justifyContent: "space-between" } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((count) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  count = count.count;
  if (cResult[0] !== count) {
    let num3;
    const items = [];
    for (let num3 = 0; num3 < count; num3 = num3 + 1) {
      let arr = items.push(hasOwnProperty(BlankAudienceTileDefault, {}, num3));
    }
    cResult[0] = count;
    cResult[1] = items;
    tmp2 = items;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((count) => {
  let num;
  count = count.count;
  const items = [];
  for (let num = 0; num < count; num = num + 1) {
    let arr = items.push(hasOwnProperty(BlankAudienceTileDefault, {}, num));
  }
  return items;
});
let closure_8 = tmp4;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let participants;
  let renderBlankAudience;
  let theme;
  let tmp5;
  let obj = channel(576);
  const cResult = obj.c(18);
  channel = channel.channel;
  ({ participants, renderBlankAudience, theme } = channel);
  const tmp3 = closure_7();
  let num = 0;
  if (undefined === renderBlankAudience || renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  let str = "center";
  if (undefined === renderBlankAudience || renderBlankAudience) {
    str = "space-between";
  }
  if (cResult[0] !== str) {
    const obj2 = { justifyContent: str };
    cResult[0] = str;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.rowContainer) {
    let tmp6;
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === channel) {
      if (cResult[6] === participants) {
        let tmp10;
        if (cResult[7] === theme) {
          tmp7 = cResult[8];
        }
        if (cResult[12] !== num) {
          let tmp11 = null;
          if (num > 0) {
            const obj3 = { count: num };
            tmp11 = closure_5(closure_8, obj3);
          }
          cResult[12] = num;
          cResult[13] = tmp11;
          tmp10 = tmp11;
        } else {
          tmp10 = cResult[13];
        }
        if (cResult[14] === tmp6) {
          if (cResult[15] === tmp7) {
            let tmp14;
            if (cResult[16] === tmp10) {
              tmp14 = cResult[17];
            }
            return tmp14;
          }
        }
        const obj4 = { style: tmp6, children: items };
        items = [tmp7, tmp10];
        const tmp17 = closure_6(View, obj4);
        cResult[14] = tmp6;
        cResult[15] = tmp7;
        cResult[16] = tmp10;
        cResult[17] = tmp17;
        tmp14 = tmp17;
      }
    }
    if (cResult[9] === channel) {
      let tmp8;
      if (cResult[10] === theme) {
        tmp8 = cResult[11];
      }
      const mapped = participants.map(tmp8);
      cResult[5] = channel;
      cResult[6] = participants;
      cResult[7] = theme;
      cResult[8] = mapped;
      tmp7 = mapped;
    }
    const fn = function h(participant) {
      const obj = { theme, channel, participant };
      return hasOwnProperty(AudienceTileDefault, obj, participant.id);
    };
    cResult[9] = channel;
    cResult[10] = theme;
    cResult[11] = fn;
    tmp8 = fn;
  }
  const items1 = [tmp3.rowContainer, tmp5];
  cResult[2] = tmp3.rowContainer;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : ((theme) => {
  let channel;
  let items1;
  let participants;
  let renderBlankAudience;
  ({ channel: require, participants, renderBlankAudience } = theme);
  if (renderBlankAudience === undefined) {
    renderBlankAudience = true;
  }
  theme = theme.theme;
  let num = 0;
  const tmp = closure_7();
  if (renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  const items = [tmp.rowContainer, ];
  let str = "center";
  if (renderBlankAudience) {
    str = "space-between";
  }
  let obj = { style: items, children: items1 };
  items[1] = { justifyContent: str };
  items1 = [
    participants.map((participant) => {
      const obj = { theme, channel: require, participant };
      return hasOwnProperty(AudienceTileDefault, obj, participant.id);
    }),

  ];
  let tmp5 = null;
  if (num > 0) {
    const obj2 = { count: num };
    tmp5 = closure_5(closure_8, obj2);
  }
  items1[1] = tmp5;
  return closure_6(View, obj);
}));
const result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default memoResult;
export const BlankAudience = tmp4;