// === Module 12197: ConjurePlanExperiences ===

// Module 12197 (ConjurePlanExperiences)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5149 */;
import AppsIcon from "AppsIcon" /* 8459 */;
import conjurePlanExperienceSurfaces from "conjurePlanExperienceSurfaces" /* 12187 */;
import conjurePlanExperienceSections from "conjurePlanExperienceSections" /* 12200 */;
import noop from "module_19" /* 19 */;

const ConjurePlanCommandText2 = ConjurePlanCommandText(12196);
require = fn;
function frameBlocks(proposal, experience, infoRows) {
  const result = conjurePlanExperienceSurfaces.conjurePlanExperiencePlacement(proposal, experience);
  if (null == result) {
    return [];
  } else {
    const items = [];
    if (result.channels.length > 0) {
      const obj2 = { channels: true, caption: null, children: null };
      const intl2 = util.intl;
      const obj3 = { count: result.channels.length };
      obj2.caption = intl2.formatToPlainString(_modDef3865.w8F5sy, obj3);
      const obj4 = { style: infoRows.infoRows, children: null };
      const channels = result.channels;
      obj4.children = channels.map((description) => {
        const name = description.name;
        return closure_1_5(closure_1_11, { name, description: description.description }, name);
      });
      obj2.children = hasOwnProperty(View, obj4);
      items.push(hasOwnProperty(closure_9, obj2, "channels"));
    }
    const result1 = conjurePlanExperienceSections.conjurePlanFrameFeatures(result);
    if (result1.length > 0) {
      const obj5 = { caption: null, children: null };
      const intl = util.intl;
      obj5.caption = intl.string(_modDef3865.MY6UGJ);
      const obj6 = { labels: result1 };
      obj5.children = hasOwnProperty(closure_10, obj6);
      items.push(hasOwnProperty(closure_9, obj5, "features"));
    }
    return items;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { frame: fn(9449).GameControllerIcon, overlay_widget: fn(12198).WindowTopIcon, user_widget: fn(10534).UserCircleIcon, bot: fn(11571).RobotIcon, commands: fn(11571).RobotIcon, automod: fn(10657).ShieldIcon };
const createStyles = fn(5153);
let obj3 = { intro: { gap: nativeDefault.space.PX_8 }, divider: null, component: null, componentHeader: null, iconBox: null, preview: null, listItem: null, bullet: null, listText: null, infoBlocks: null, infoBlock: null, channelsBlock: null, infoRows: null, infoRow: null, infoText: null, chips: null, chip: null };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj3.divider = { marginVertical: nativeDefault.space.PX_24, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { marginVertical: nativeDefault.space.PX_24, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj3.component = { gap: nativeDefault.space.PX_12 };
let obj6 = { gap: nativeDefault.space.PX_12 };
obj3.componentHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20 };
obj3.iconBox = size;
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj3.preview = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.listItem = { flexDirection: "row" };
let obj8 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.bullet = { width: nativeDefault.space.PX_24, paddingStart: nativeDefault.space.PX_8 };
obj3.listText = { flex: 1, minWidth: 0 };
let obj9 = { width: nativeDefault.space.PX_24, paddingStart: nativeDefault.space.PX_8 };
obj3.infoBlocks = { gap: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_12 };
let obj10 = { gap: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_12 };
obj3.infoBlock = { gap: nativeDefault.space.PX_8 };
let obj11 = { gap: nativeDefault.space.PX_8 };
obj3.channelsBlock = { gap: nativeDefault.space.PX_12 };
const obj12 = { gap: nativeDefault.space.PX_12 };
obj3.infoRows = { gap: nativeDefault.space.PX_8 };
const obj13 = { gap: nativeDefault.space.PX_8 };
obj3.infoRow = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
const obj14 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
obj3.infoText = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
const obj15 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
obj3.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
const obj16 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj3.chip = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function InfoBlock(arg0) {
  const cResult = c.c(9);
  ({ caption, channels, children } = arg0);
  let channelsBlock = undefined !== channels && channels;
  const tmp4 = closure_8();
  if (channelsBlock) {
    channelsBlock = tmp4.channelsBlock;
  }
  if (cResult[0] === tmp4.infoBlock) {
    if (cResult[1] === channelsBlock) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== caption) {
      const obj2 = { variant: "text-sm/normal", color: "text-muted", accessibilityRole: "header", children: caption };
      const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
      cResult[3] = caption;
      cResult[4] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === children) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp6) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const obj3 = { style: tmp5, children: null };
    const items = [tmp6, children];
    obj3.children = items;
    const tmp12 = timestampProducer(View, obj3);
    cResult[5] = children;
    cResult[6] = tmp5;
    cResult[7] = tmp6;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  const items1 = [tmp4.infoBlock, channelsBlock];
  cResult[0] = tmp4.infoBlock;
  cResult[1] = channelsBlock;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function InfoBlock(children) {
  let flag = children.channels;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const items = [tmp.infoBlock, ];
  if (flag) {
    flag = tmp.channelsBlock;
  }
  obj = { style: items, children: null };
  items[1] = flag;
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", accessibilityRole: "header", children: children.caption }), children.children];
  obj.children = items1;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function Chips(labels) {
  const cResult = require("c").c(8);
  labels = labels.labels;
  const tmp2 = closure_8();
  _require = tmp2;
  if (cResult[0] === labels) {
    if (cResult[1] === tmp2.chip) {
      if (cResult[5] === tmp2.chips) {
        if (cResult[6] === tmp4) {
          let tmp7 = cResult[7];
        }
        return tmp7;
      }
      const obj2 = { style: tmp3, children: cResult[2] };
      const tmp10 = closure_5(View, obj2);
      cResult[5] = tmp2.chips;
      cResult[6] = cResult[2];
      cResult[7] = tmp10;
      tmp7 = tmp10;
    }
  }
  if (cResult[3] !== tmp2.chip) {
    const fn = function c(children) {
      obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children }) };
      return hasOwnProperty(View, obj, children);
    };
    cResult[3] = tmp2.chip;
    cResult[4] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const mapped = labels.map(tmp5);
  cResult[0] = labels;
  labels = tmp2.chip;
  cResult[1] = labels;
  cResult[2] = mapped;
  obj = require("c");
}) : (function Chips(labels) {
  labels = labels.labels;
  const tmp = closure_8();
  const chip = tmp;
  return closure_5(View, {
    style: tmp.chips,
    children: labels.map((children) => {
      obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children }) };
      return hasOwnProperty(View, obj, children);
    })
  });
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(arg0) {
  const cResult = c.c(16);
  ({ name, description } = arg0);
  const tmp4 = closure_8();
  const combined = "" + name + ", " + description;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    const tmp9 = hasOwnProperty(AppsIcon.AppsIcon, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconBox) {
    const obj3 = { style: tmp4.iconBox, children: first };
    const tmp13 = hasOwnProperty(View, obj3);
    cResult[1] = tmp4.iconBox;
    cResult[2] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== name) {
    const obj4 = { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: name };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[3] = name;
    cResult[4] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== description) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    const tmp19 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[5] = description;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp4.infoText) {
    if (cResult[8] === tmp14) {
      if (cResult[9] === tmp17) {
        let tmp20 = cResult[10];
      }
      if (cResult[11] === tmp4.infoRow) {
        if (cResult[12] === combined) {
          if (cResult[13] === tmp10) {
            if (cResult[14] === tmp20) {
              let tmp22 = cResult[15];
            }
            return tmp22;
          }
        }
      }
      const obj6 = { style: tmp4.infoRow, accessible: true, accessibilityLabel: combined, children: null };
      const items = [tmp10, tmp20];
      obj6.children = items;
      const tmp25 = timestampProducer(View, obj6);
      cResult[11] = tmp4.infoRow;
      cResult[12] = combined;
      cResult[13] = tmp10;
      cResult[14] = tmp20;
      cResult[15] = tmp25;
      tmp22 = tmp25;
    }
  }
  const obj7 = { style: tmp4.infoText, children: null };
  const items1 = [tmp14, tmp17];
  obj7.children = items1;
  const tmp21 = timestampProducer(View, obj7);
  cResult[7] = tmp4.infoText;
  cResult[8] = tmp14;
  cResult[9] = tmp17;
  cResult[10] = tmp21;
  tmp20 = tmp21;
}) : (function ChannelRow(arg0) {
  ({ name, description } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.infoRow, accessible: true, accessibilityLabel: "" + name + ", " + description, children: null };
  const obj2 = { style: tmp.iconBox, children: hasOwnProperty(AppsIcon.AppsIcon, { size: "xs", color: nativeDefault.colors.ICON_STRONG }) };
  const items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.infoText, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: name }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: description })];
  obj4.children = items1;
  items[1] = timestampProducer(View, obj4);
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommandList(commands) {
  const cResult = c.c(6);
  commands = commands.commands;
  const tmp2 = closure_8();
  if (cResult[0] !== commands) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(description, arg1) {
        let str2;
        if (description.description != null) {
          str2 = str.trim();
        }
        if (str2 == null) {
          str2 = "";
        }
        obj = { name: description.name, size: "text-sm", prefix: require("conjurePlanFormat").conjurePlanCommandPrefix(description) };
        const children = [closure_1_5(require("ConjurePlanCommandText").ConjurePlanCommandMention, obj), ];
        let combined = null;
        if ("" !== str2) {
          const _HermesInternal = HermesInternal;
          combined = " " + str2;
        }
        children[1] = combined;
        return closure_1_6(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-subtle", children }, arg1);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = commands.map(tmp6);
    cResult[0] = commands;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === tmp2.infoRows) {
      if (cResult[4] === tmp4) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj2 = { style: tmp3, children: cResult[1] };
    const tmp12 = hasOwnProperty(View, obj2);
    cResult[3] = tmp2.infoRows;
    cResult[4] = cResult[1];
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
}) : (function CommandList(commands) {
  commands = commands.commands;
  return hasOwnProperty(View, {
    style: closure_8().infoRows,
    children: commands.map((description, index) => {
      let str2;
      if (description.description != null) {
        str2 = str.trim();
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = { name: description.name, size: "text-sm", prefix: require("conjurePlanFormat").conjurePlanCommandPrefix(description) };
      const children = [closure_1_5(require("ConjurePlanCommandText").ConjurePlanCommandMention, obj), ];
      let combined = null;
      if ("" !== str2) {
        const _HermesInternal = HermesInternal;
        combined = " " + str2;
      }
      children[1] = combined;
      return closure_1_6(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-subtle", children }, index);
    })
  });
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExperienceBlocks(arg0) {
  let map = require;
  let fn = dependencyMap;
  const cResult = c.c(10);
  ({ proposal, experience } = arg0);
  const tmp2 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if ("frame" === experience.kind) {
    if (cResult[1] === experience) {
      if (cResult[2] === proposal) {
      }
    }
    const tmp15 = frameBlocks(proposal, experience, tmp2);
    cResult[1] = experience;
    cResult[2] = proposal;
    cResult[3] = tmp2;
    cResult[4] = tmp15;
  } else {
    let tmp3 = "bot" !== experience.kind;
    if (tmp3) {
      tmp3 = "commands" !== experience.kind;
    }
    if (!tmp3) {
      if (cResult[5] !== proposal) {
        if (proposal.commands.length > 0) {
          const obj2 = { caption: null, children: null };
          const intl = util.intl;
          obj2.caption = intl.string(util.t["0hKkS+"]);
          const obj3 = { commands: proposal.commands };
          obj2.children = hasOwnProperty(closure_13, obj3);
          const items1 = [hasOwnProperty(closure_9, obj2, "commands")];
          let items2 = items1;
        } else {
          items2 = [];
        }
        const items3 = [];
        const mapped = conjurePlanExperienceSections;
        const result = mapped.conjurePlanRequirementGroups(proposal);
        map = result.map;
        fn = (caption) => {
          obj = { caption: caption.caption, children: closure_1_5(closure_1_10, { labels: caption.labels }) };
          return closure_1_5(closure_1_9, obj, caption.key);
        };
        HermesBuiltin.arraySpread(map(fn), HermesBuiltin.arraySpread(items2, 0));
        cResult[5] = proposal;
        cResult[6] = items3;
        const arraySpreadResult = HermesBuiltin.arraySpread(items2, 0);
      } else {
        first = cResult[6];
      }
    }
    if (cResult[7] === first) {
      if (cResult[8] === tmp2) {
        let tmp17 = cResult[9];
      }
      return tmp17;
    }
    let tmp18 = null;
    if (first.length > 0) {
      const obj4 = { style: tmp2.infoBlocks, children: first };
      tmp18 = hasOwnProperty(View, obj4);
    }
    cResult[7] = first;
    cResult[8] = tmp2;
    cResult[9] = tmp18;
    tmp17 = tmp18;
  }
}) : (function ExperienceBlocks(arg0) {
  ({ proposal, experience } = arg0);
  const tmp = closure_8();
  if ("frame" === experience.kind) {
    let items = frameBlocks(proposal, experience, tmp);
  } else {
    let tmp2 = "bot" !== experience.kind;
    if (tmp2) {
      tmp2 = "commands" !== experience.kind;
    }
    items = [];
    if (!tmp2) {
      if (proposal.commands.length > 0) {
        obj = { caption: null, children: null };
        const intl = util.intl;
        obj.caption = intl.string(util.t["0hKkS+"]);
        const obj2 = { commands: proposal.commands };
        obj.children = hasOwnProperty(closure_13, obj2);
        const items1 = [hasOwnProperty(closure_9, obj, "commands")];
        let items2 = items1;
      } else {
        items2 = [];
      }
      const items3 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, 0);
      const result = conjurePlanExperienceSections.conjurePlanRequirementGroups(proposal);
      HermesBuiltin.arraySpread(result.map((caption) => {
        obj = { caption: caption.caption, children: closure_1_5(closure_1_10, { labels: caption.labels }) };
        return closure_1_5(closure_1_9, obj, caption.key);
      }), arraySpreadResult);
      items = items3;
    }
  }
  let tmp16 = null;
  if (items.length > 0) {
    const obj4 = { style: tmp.infoBlocks, children: items };
    tmp16 = hasOwnProperty(View, obj4);
  }
  return tmp16;
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function Bullets(arg0) {
  const cResult = commandNames(576).c(9);
  ({ bullets, commandNames } = arg0);
  const tmp2 = closure_8();
  closure_1 = tmp2;
  if (cResult[0] === bullets) {
    if (cResult[1] === commandNames) {
      if (cResult[2] === tmp2) {
        if (cResult[7] !== cResult[3]) {
          const obj2 = { children: tmp3 };
          const tmp10 = closure_5(View, obj2);
          cResult[7] = tmp3;
          cResult[8] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[8];
        }
        return tmp7;
      }
    }
  }
  if (cResult[4] === commandNames) {
    if (cResult[5] === tmp2) {
      let tmp4 = cResult[6];
    }
    const mapped = bullets.map(tmp4);
    cResult[0] = bullets;
    cResult[1] = commandNames;
    cResult[2] = tmp2;
    cResult[3] = mapped;
  }
  const fn = function s(text, arg1) {
    obj = { style: closure_1.listItem, children: null };
    const items = [hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: closure_1.bullet, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: "\u2022" }), ];
    const obj3 = { variant: "text-md/normal", color: "text-default", style: closure_1.listText, children: hasOwnProperty(ConjurePlanCommandText2.ConjurePlanCommandText, { text, commandNames, size: "text-md" }) };
    items[1] = hasOwnProperty(Text_Text.Text, obj3);
    obj.children = items;
    return timestampProducer(View, obj, arg1);
  };
  cResult[4] = commandNames;
  cResult[5] = tmp2;
  cResult[6] = fn;
  tmp4 = fn;
  obj = commandNames(576);
}) : (function Bullets(arg0) {
  ({ bullets, commandNames: require } = arg0);
  closure_1 = closure_8();
  return closure_5(View, {
    children: bullets.map((text, index) => {
      obj = { style: closure_1.listItem, children: null };
      const items = [hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: closure_1.bullet, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: "\u2022" }), ];
      const obj3 = { variant: "text-md/normal", color: "text-default", style: closure_1.listText, children: hasOwnProperty(ConjurePlanCommandText2.ConjurePlanCommandText, { text, commandNames, size: "text-md" }) };
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(View, obj, index);
    })
  });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentSection(arg0) {
  let ConjurePlanCommandText = require;
  let tmp = dependencyMap;
  obj = c;
  const cResult = obj.c(29);
  ({ experience, bullets, preview, proposal, commandNames } = arg0);
  const tmp3 = closure_8();
  ({ component, componentHeader } = tmp3);
  if (cResult[0] !== obj[experience.kind]) {
    const obj2 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
    const tmp8 = hasOwnProperty(tmp4, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.iconBox) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] !== experience.kind) {
      const intl = util.intl;
      const stringResult = intl.string(conjurePlanExperienceSections.CONJURE_PLAN_EXPERIENCE_KIND_LABELS[experience.kind]);
      cResult[5] = experience.kind;
      cResult[6] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      const obj3 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "header", children: tmp11 };
      const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[7] = tmp11;
      cResult[8] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp3.componentHeader) {
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp13) {
          let tmp16 = cResult[12];
        }
        if (cResult[13] === preview) {
          if (cResult[14] === tmp3.preview) {
            let tmp20 = cResult[15];
          }
          if (cResult[16] === bullets) {
            if (cResult[17] === commandNames) {
              if (cResult[18] === experience.kind) {
                if (cResult[20] === experience) {
                  if (cResult[21] === proposal) {
                    let tmp30 = cResult[22];
                  }
                  if (cResult[23] === tmp3.component) {
                    if (cResult[24] === tmp30) {
                      if (cResult[25] === tmp16) {
                        if (cResult[26] === tmp20) {
                          if (cResult[27] === tmp24) {
                            let tmp34 = cResult[28];
                          }
                          return tmp34;
                        }
                      }
                    }
                  }
                  const obj4 = { style: component, children: null };
                  const items = [tmp16, tmp20, tmp24, tmp30];
                  obj4.children = items;
                  const tmp37 = timestampProducer(View, obj4);
                  cResult[23] = tmp3.component;
                  cResult[24] = tmp30;
                  cResult[25] = tmp16;
                  cResult[26] = tmp20;
                  cResult[27] = tmp24;
                  cResult[28] = tmp37;
                  tmp34 = tmp37;
                }
                const obj5 = { proposal, experience };
                const tmp33 = hasOwnProperty(closure_14, obj5);
                cResult[20] = experience;
                cResult[21] = proposal;
                cResult[22] = tmp33;
                tmp30 = tmp33;
              }
            }
          }
          if ("automod" !== experience.kind) {
            let tmp25 = null;
            if (bullets.length > 0) {
              const obj6 = { bullets, commandNames };
              tmp25 = hasOwnProperty(closure_15, obj6);
            }
            cResult[16] = bullets;
            cResult[17] = commandNames;
            commandNames = experience.kind;
            cResult[18] = commandNames;
            cResult[19] = tmp25;
          }
          const obj7 = { variant: "text-md/normal", color: "text-default", children: null };
          ConjurePlanCommandText = ConjurePlanCommandText2.ConjurePlanCommandText;
          const obj8 = { text: bullets[0], commandNames, size: "text-md" };
          tmp = hasOwnProperty(ConjurePlanCommandText, obj8);
          obj7.children = tmp;
          tmp25 = hasOwnProperty(Text_Text.Text, obj7);
        }
        let tmp21 = null;
        if (null != preview) {
          const obj9 = { style: tmp3.preview, children: preview };
          tmp21 = hasOwnProperty(View, obj9);
        }
        cResult[13] = preview;
        cResult[14] = tmp3.preview;
        cResult[15] = tmp21;
        tmp20 = tmp21;
      }
    }
    const obj10 = { style: componentHeader, children: null };
    const items1 = [tmp9, tmp13];
    obj10.children = items1;
    const tmp19 = timestampProducer(View, obj10);
    cResult[9] = tmp3.componentHeader;
    cResult[10] = tmp9;
    cResult[11] = tmp13;
    cResult[12] = tmp19;
    tmp16 = tmp19;
  }
  const tmp10 = hasOwnProperty(View, { style: tmp3.iconBox, children: tmp5 });
  cResult[2] = tmp3.iconBox;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj11 = { style: tmp3.iconBox, children: tmp5 };
}) : (function ComponentSection(proposal) {
  ({ experience, bullets, preview, commandNames } = proposal);
  const tmp = closure_8();
  obj = { style: tmp.component, children: null };
  const obj2 = { style: tmp.componentHeader, children: null };
  const obj3 = { style: tmp.iconBox, children: hasOwnProperty(obj[experience.kind], { size: "xs", color: nativeDefault.colors.ICON_STRONG }) };
  const items = [hasOwnProperty(View, obj3), ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj5.children = intl.string(conjurePlanExperienceSections.CONJURE_PLAN_EXPERIENCE_KIND_LABELS[experience.kind]);
  items[1] = hasOwnProperty(Text_Text.Text, obj5);
  obj2.children = items;
  const items1 = [timestampProducer(View, obj2), , , ];
  let tmp4Result = null;
  if (null != preview) {
    const obj6 = { style: tmp.preview, children: preview };
    tmp4Result = hasOwnProperty(View, obj6);
  }
  items1[1] = tmp4Result;
  if ("automod" === experience.kind) {
    if (1 === bullets.length) {
      const obj7 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj8 = { text: bullets[0], commandNames, size: "text-md" };
      obj7.children = hasOwnProperty(ConjurePlanCommandText2.ConjurePlanCommandText, obj8);
      let tmp4Result2 = hasOwnProperty(Text_Text.Text, obj7);
    }
    items1[2] = tmp4Result2;
    const obj9 = { proposal: proposal.proposal, experience };
    items1[3] = hasOwnProperty(closure_14, obj9);
    obj.children = items1;
    return timestampProducer(View, obj);
  }
  tmp4Result2 = null;
  if (bullets.length > 0) {
    const obj10 = { bullets, commandNames };
    tmp4Result2 = hasOwnProperty(closure_15, obj10);
  }
  const obj4 = { size: "xs", color: nativeDefault.colors.ICON_STRONG };
});
ReactCompilerGating = fn(558);
const obj17 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanExperiences.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanExperiences(renderPreview) {
  const cResult = proposal(commandNames[11]).c(14);
  ({ appName, intro, proposal } = renderPreview);
  renderPreview = renderPreview.renderPreview;
  commandNames = renderPreview.commandNames;
  const tmp4 = closure_8();
  const divider = tmp4;
  if (cResult[0] !== appName) {
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: appName };
    const tmp7 = closure_5(proposal(tmp2[12]).Heading, obj2);
    cResult[0] = appName;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === intro) {
    if (cResult[3] === tmp4.intro) {
      if (cResult[4] === tmp5) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === commandNames) {
        if (cResult[7] === proposal) {
          if (cResult[8] === renderPreview) {
            if (cResult[9] === tmp4.divider) {
              let tmp10 = cResult[10];
            }
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp10) {
                let tmp13 = cResult[13];
              }
              return tmp13;
            }
            const obj3 = { children: null };
            let items = [tmp8, tmp10];
            obj3.children = items;
            const tmp16 = closure_6(View, obj3);
            cResult[11] = tmp8;
            cResult[12] = tmp10;
            cResult[13] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
      let experiences = proposal.experiences;
      if (experiences == null) {
        experiences = [];
      }
      const result = proposal(tmp2[17]).conjurePlanDisplayedSections(experiences, commandNames);
      const mapped = result.map((bullets) => {
        const experience = bullets.experience;
        obj = { children: null };
        const items = [hasOwnProperty(View, { style: divider.divider }), hasOwnProperty(closure_16, { experience, bullets: bullets.bullets, preview: renderPreview(experience), proposal, commandNames })];
        obj.children = items;
        return timestampProducer(noop.Fragment, obj, experience.id);
      });
      cResult[6] = commandNames;
      cResult[7] = proposal;
      cResult[8] = renderPreview;
      cResult[9] = tmp4.divider;
      cResult[10] = mapped;
      tmp10 = mapped;
      const tmpResult = proposal(tmp2[17]);
    }
  }
  const obj4 = { style: tmp4.intro, children: null };
  const items1 = [tmp5, intro];
  obj4.children = items1;
  const tmp9 = closure_6(View, obj4);
  cResult[2] = intro;
  cResult[3] = tmp4.intro;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  obj = proposal(commandNames[11]);
}) : (function ConjurePlanExperiences(proposal) {
  proposal = proposal.proposal;
  ({ renderPreview: importDefault, commandNames } = proposal);
  ({ appName, intro } = proposal);
  const tmp = closure_8();
  const divider = tmp;
  obj = { style: tmp.intro, children: null };
  let items = [closure_5(proposal(commandNames[12]).Heading, { variant: "heading-lg/semibold", color: "text-strong", children: appName }), intro];
  obj.children = items;
  const items1 = [closure_6(View, obj), ];
  let experiences = proposal.experiences;
  if (experiences == null) {
    experiences = [];
  }
  const obj3 = { children: null };
  const result = proposal(commandNames[17]).conjurePlanDisplayedSections(experiences, commandNames);
  items1[1] = result.map((bullets) => {
    const experience = bullets.experience;
    obj = { children: null };
    const items = [hasOwnProperty(View, { style: divider.divider }), hasOwnProperty(closure_16, { experience, bullets: bullets.bullets, preview: importDefault(experience), proposal, commandNames })];
    obj.children = items;
    return timestampProducer(noop.Fragment, obj, experience.id);
  });
  obj3.children = items1;
  return closure_6(View, obj3);
});