// discord_app/modules/conjure/home/conjureHomeInspirationEntries.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/home/conjureHomeInspirationEntries.tsx");

export function conjureHomeCategoryLabel(category) {
  if ("games" === category) {
    const intl5 = util.intl;
    return intl5.string(_modDef3865["JU01/4"]);
  } else if ("apps" === category) {
    const intl4 = util.intl;
    return intl4.string(_modDef3865["bvcT/Q"]);
  } else if ("profile_widget" === category) {
    const intl3 = util.intl;
    return intl3.string(_modDef3865.GUb2zA);
  } else if ("automod" === category) {
    const intl2 = util.intl;
    return intl2.string(_modDef3865["+EKk4D"]);
  } else if ("chat_bot" === category) {
    const intl = util.intl;
    return intl.string(_modDef3865.KBHZfO);
  }
}
export function conjureHomeInspirationEntries() {
  const obj = {
    id: "flappy",
    category: "games",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "1",
  };
  const intl = util.intl;
  obj.shortPrompt = intl.string(_modDef3865.gtX7tS);
  const intl2 = util.intl;
  obj.fullPrompt = intl2.string(_modDef3865["Sfa50+"]);
  const intl3 = util.intl;
  obj.name = intl3.string(_modDef3865.Tbag5k);
  const items = [obj, , , , , ,];
  const obj2 = {
    id: "raid-calendar",
    category: "apps",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "2",
  };
  const intl4 = util.intl;
  obj2.shortPrompt = intl4.string(_modDef3865.GNGB59);
  const intl5 = util.intl;
  obj2.fullPrompt = intl5.string(_modDef3865.lxwxNm);
  const intl6 = util.intl;
  obj2.name = intl6.string(_modDef3865["rzB/bE"]);
  items[1] = obj2;
  const obj3 = {
    id: "aram-widget",
    category: "profile_widget",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "3",
  };
  const intl7 = util.intl;
  obj3.shortPrompt = intl7.string(_modDef3865.RzNoHJ);
  const intl8 = util.intl;
  obj3.fullPrompt = intl8.string(_modDef3865.VfUFEt);
  const intl9 = util.intl;
  obj3.name = intl9.string(_modDef3865.RYGHMF);
  items[2] = obj3;
  const obj4 = {
    id: "trivia",
    category: "games",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "4",
  };
  const intl10 = util.intl;
  obj4.shortPrompt = intl10.string(_modDef3865.TGN39X);
  const intl11 = util.intl;
  obj4.fullPrompt = intl11.string(_modDef3865.gilNLG);
  const intl12 = util.intl;
  obj4.name = intl12.string(_modDef3865.vvwBlz);
  items[3] = obj4;
  const obj5 = {
    id: "spoilers-automod",
    category: "automod",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "5",
  };
  const intl13 = util.intl;
  obj5.shortPrompt = intl13.string(_modDef3865.Gw756q);
  const intl14 = util.intl;
  obj5.fullPrompt = intl14.string(_modDef3865["d/WMHR"]);
  const intl15 = util.intl;
  obj5.name = intl15.string(_modDef3865["v9+fAY"]);
  items[4] = obj5;
  const obj6 = {
    id: "movie-night",
    category: "apps",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "6",
  };
  const intl16 = util.intl;
  obj6.shortPrompt = intl16.string(_modDef3865.u4UWGH);
  const intl17 = util.intl;
  obj6.fullPrompt = intl17.string(_modDef3865.ofBNNy);
  const intl18 = util.intl;
  obj6.name = intl18.string(_modDef3865.DQQdZL);
  items[5] = obj6;
  const obj7 = {
    id: "welcome-bot",
    category: "chat_bot",
    shortPrompt: null,
    fullPrompt: null,
    name: null,
    authorAvatarSeed: "7",
  };
  const intl19 = util.intl;
  obj7.shortPrompt = intl19.string(_modDef3865["T3+H3J"]);
  const intl20 = util.intl;
  obj7.fullPrompt = intl20.string(_modDef3865.ryeSuC);
  const intl21 = util.intl;
  obj7.name = intl21.string(_modDef3865["3deXbx"]);
  items[6] = obj7;
  return items;
}
