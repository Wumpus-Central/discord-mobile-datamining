// discord_app/modules/stage_channels/native/components/AudienceGridRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import BlankAudienceTileDefault from "BlankAudienceTile.tsx";
import AudienceTileDefault from "AudienceTile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MAX_AUDIENCE_ROW_LIMIT = fn(5571).MAX_AUDIENCE_ROW_LIMIT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 16,
    paddingHorizontal: 4,
    justifyContent: "space-between",
  },
});
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (count) => {
      const cResult = c.c(2);
      count = count.count;
      if (cResult[0] !== count) {
        const items = [];
        for (let num3 = 0; num3 < count; num3 = num3 + 1) {
          let arr = items.push(hasOwnProperty(BlankAudienceTileDefault, {}, num3));
        }
        cResult[0] = count;
        cResult[1] = items;
        let tmp2 = items;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (count) => {
      count = count.count;
      const items = [];
      for (let num = 0; num < count; num = num + 1) {
        let arr = items.push(hasOwnProperty(BlankAudienceTileDefault, {}, num));
      }
      return items;
    };
let closure_8 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(576).c(18);
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
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp3.rowContainer) {
          if (cResult[3] === tmp5) {
            let tmp6 = cResult[4];
          }
          if (cResult[5] === channel) {
            if (cResult[6] === participants) {
              if (cResult[7] === theme) {
                if (cResult[12] !== num) {
                  let tmp12 = null;
                  if (num > 0) {
                    const obj3 = { count: num };
                    tmp12 = closure_5(closure_8, obj3);
                  }
                  cResult[12] = num;
                  cResult[13] = tmp12;
                  let tmp11 = tmp12;
                } else {
                  tmp11 = cResult[13];
                }
                if (cResult[14] === tmp6) {
                  if (cResult[15] === tmp7) {
                    if (cResult[16] === tmp11) {
                      let tmp15 = cResult[17];
                    }
                    return tmp15;
                  }
                }
                const obj4 = { style: tmp6, children: null };
                const items = [cResult[8], tmp11];
                obj4.children = items;
                const tmp18 = closure_6(View, obj4);
                cResult[14] = tmp6;
                cResult[15] = cResult[8];
                cResult[16] = tmp11;
                cResult[17] = tmp18;
                tmp15 = tmp18;
              }
            }
          }
          if (cResult[9] === channel) {
            if (cResult[10] === theme) {
              let tmp8 = cResult[11];
            }
            const mapped = participants.map(tmp8);
            cResult[5] = channel;
            cResult[6] = participants;
            cResult[7] = theme;
            cResult[8] = mapped;
          }
          const fn = function h(participant) {
            return hasOwnProperty(AudienceTileDefault, { theme, channel, participant }, participant.id);
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
        const obj = channel(576);
      }
    : (theme) => {
        ({ channel: require, participants, renderBlankAudience } = theme);
        if (renderBlankAudience === undefined) {
          renderBlankAudience = true;
        }
        theme = theme.theme;
        let num = 0;
        if (renderBlankAudience) {
          num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
        }
        const items = [closure_7().rowContainer];
        let str = "center";
        if (renderBlankAudience) {
          str = "space-between";
        }
        const obj = { style: items, children: null };
        items[1] = { justifyContent: str };
        const items1 = [
          participants.map((participant) =>
            hasOwnProperty(AudienceTileDefault, { theme, channel, participant }, participant.id),
          ),
        ];
        let tmp5 = null;
        if (num > 0) {
          const obj2 = { count: num };
          tmp5 = closure_5(closure_8, obj2);
        }
        items1[1] = tmp5;
        obj.children = items1;
        return closure_6(View, obj);
      },
);
export const BlankAudience = tmp3;
