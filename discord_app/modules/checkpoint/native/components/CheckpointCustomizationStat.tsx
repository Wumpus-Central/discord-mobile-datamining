// discord_app/modules/checkpoint/native/components/CheckpointCustomizationStat.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3216 from "../../Checkpoint.messages.js";
import _modDef3248 from "../../Checkpoint2026.messages.js";
import CheckpointCustomizationUtils from "../../CheckpointCustomizationUtils.tsx";
import CheckpointStatsUtils from "../../CheckpointStatsUtils.tsx";
import ChatIcon from "../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import CalendarIcon from "../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import ServerIcon from "../../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import EmojiSlightlySmilingFaceIcon from "../../../../design/components/Icon/native/redesign/generated/EmojiSlightlySmilingFaceIcon.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import CheckpointStatNumberDefault from "CheckpointStatNumber.tsx";
import CheckpointTagDefault from "CheckpointTag.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../CheckpointStore.tsx";

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6224).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  stat: { maxWidth: 144, alignItems: "flex-start" },
  label: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 },
  labelText: { flexShrink: 1 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCustomizationStat.tsx");

export default function CheckpointCustomizationStat(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_8();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => stats.stats);
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE === customizationOption) {
    const obj2 = { Icon: MicrophoneIcon.MicrophoneIcon, value: null, percentile: null, title: null };
    let totalVoiceMinutes;
    if (stateFromStores != null) {
      const voice = stateFromStores.voice;
      if (voice != null) {
        totalVoiceMinutes = voice.totalVoiceMinutes;
      }
    }
    obj2.value = totalVoiceMinutes;
    let prop;
    if (stateFromStores != null) {
      const voice2 = stateFromStores.voice;
      if (voice2 != null) {
        prop = voice2.totalVoiceMinutesPercentile;
      }
    }
    obj2.percentile = prop;
    const intl6 = util.intl;
    obj2.title = intl6.string(_modDef3248["3/T12E"]);
    let tmp8 = obj2;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === customizationOption) {
    const obj3 = { Icon: ChatIcon.ChatIcon, value: null, percentile: null, title: null };
    let numMessagesSent;
    if (stateFromStores != null) {
      const messages = stateFromStores.messages;
      if (messages != null) {
        numMessagesSent = messages.numMessagesSent;
      }
    }
    obj3.value = numMessagesSent;
    let prop1;
    if (stateFromStores != null) {
      const messages2 = stateFromStores.messages;
      if (messages2 != null) {
        prop1 = messages2.numMessagesSentPercentile;
      }
    }
    obj3.percentile = prop1;
    const intl5 = util.intl;
    obj3.title = intl5.string(_modDef3216.wWKySP);
    tmp8 = obj3;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT === customizationOption) {
    const obj4 = { Icon: ServerIcon.ServerIcon, value: null, percentile: null, title: null };
    let numDaysInteracted;
    if (stateFromStores != null) {
      const guilds = stateFromStores.guilds;
      if (guilds != null) {
        const first = guilds.guilds[0];
        if (first != null) {
          numDaysInteracted = first.numDaysInteracted;
        }
      }
    }
    obj4.value = numDaysInteracted;
    let prop2;
    if (stateFromStores != null) {
      const guilds2 = stateFromStores.guilds;
      if (guilds2 != null) {
        const first1 = guilds2.guilds[0];
        if (first1 != null) {
          prop2 = first1.numDaysInteractedPercentile;
        }
      }
    }
    obj4.percentile = prop2;
    const intl4 = util.intl;
    obj4.title = intl4.string(_modDef3248["M+a+t1"]);
    tmp8 = obj4;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES === customizationOption) {
    const obj5 = {
      Icon: EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon,
      value: null,
      percentile: null,
      title: null,
    };
    let numEmojisSent;
    if (stateFromStores != null) {
      const emojis = stateFromStores.emojis;
      if (emojis != null) {
        numEmojisSent = emojis.numEmojisSent;
      }
    }
    obj5.value = numEmojisSent;
    let prop3;
    if (stateFromStores != null) {
      const emojis2 = stateFromStores.emojis;
      if (emojis2 != null) {
        prop3 = emojis2.numEmojisSentPercentile;
      }
    }
    obj5.percentile = prop3;
    const intl3 = util.intl;
    obj5.title = intl3.string(_modDef3248.ZTDCIv);
    tmp8 = obj5;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE === customizationOption) {
    const obj6 = { Icon: GameControllerIcon.GameControllerIcon, value: null, percentile: null, title: null };
    let totalGamesPlayed;
    if (stateFromStores != null) {
      const games3 = stateFromStores.games;
      if (games3 != null) {
        totalGamesPlayed = games3.totalGamesPlayed;
      }
    }
    obj6.value = totalGamesPlayed;
    let prop4;
    if (stateFromStores != null) {
      const games4 = stateFromStores.games;
      if (games4 != null) {
        prop4 = games4.totalGamesPlayedPercentile;
      }
    }
    obj6.percentile = prop4;
    const intl2 = util.intl;
    obj6.title = intl2.string(_modDef3248.HM2fjf);
    tmp8 = obj6;
  } else {
    tmp8 = null;
    if (CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA === customizationOption) {
      const obj7 = { Icon: CalendarIcon.CalendarIcon, value: null, percentile: null, title: null };
      let totalDaysPlayed;
      if (stateFromStores != null) {
        const games = stateFromStores.games;
        if (games != null) {
          totalDaysPlayed = games.totalDaysPlayed;
        }
      }
      obj7.value = totalDaysPlayed;
      let prop5;
      if (stateFromStores != null) {
        const games2 = stateFromStores.games;
        if (games2 != null) {
          prop5 = games2.totalDaysPlayedPercentile;
        }
      }
      obj7.percentile = prop5;
      const intl = util.intl;
      obj7.title = intl.string(_modDef3248["4N5p4D"]);
      tmp8 = obj7;
    }
  }
  if (null == tmp8) {
    return null;
  } else {
    const title = tmp8.title;
    ({ value, Icon } = tmp8);
    if (value == null) {
      value = 0;
    }
    const rounded = Math.round(value);
    const toLocaleStringResult = rounded.toLocaleString(util.intl.currentLocale);
    const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(tmp8.percentile);
    let formatToPlainStringResult = null;
    if (null != checkpointTopPercent) {
      const intl7 = util.intl;
      const obj8 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl7.formatToPlainString(_modDef3248.fOGKA4, obj8);
    }
    if (null != formatToPlainStringResult) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + toLocaleStringResult + " " + title + ", " + formatToPlainStringResult;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + toLocaleStringResult + " " + title;
    }
    const obj9 = { style: tmp.stat, accessible: true, accessibilityLabel: combined, children: null };
    let tmp41 = null != formatToPlainStringResult;
    if (tmp41) {
      const obj10 = { children: formatToPlainStringResult.toLocaleUpperCase() };
      tmp41 = timestampProducer(CheckpointTagDefault, obj10);
    }
    const items1 = [tmp41, ,];
    const obj11 = { value: toLocaleStringResult };
    items1[1] = timestampProducer(CheckpointStatNumberDefault, obj11);
    const obj12 = { style: tmp.label, children: null };
    const obj13 = { size: "xs", color: CHECKPOINT_PRIMARY };
    const items2 = [timestampProducer(Icon, obj13)];
    const obj14 = { variant: "heading-xs/semibold", style: tmp.labelText, children: null };
    const tmp2Result = CheckpointStatsUtils;
    obj14.children = title.toLocaleUpperCase();
    items2[1] = timestampProducer(CheckpointTextDefault, obj14);
    obj12.children = items2;
    items1[2] = metroImportDefault(View, obj12);
    obj9.children = items1;
    return metroImportDefault(View, obj9);
  }
}
