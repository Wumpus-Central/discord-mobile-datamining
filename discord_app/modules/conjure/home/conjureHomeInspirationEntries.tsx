// === Module 12972: conjureHomeInspirationEntries ===

// Module 12972 (conjureHomeInspirationEntries)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/home/conjureHomeInspirationEntries.tsx");

export function conjureHomeCategoryLabel(category) {
  if ("games" === category) {
    const intl6 = util.intl;
    return intl6.string(_modDef3868["JU01/4"]);
  } else if ("apps" === category) {
    const intl5 = util.intl;
    return intl5.string(_modDef3868["bvcT/Q"]);
  } else if ("profile_widget" === category) {
    const intl4 = util.intl;
    return intl4.string(_modDef3868.GUb2zA);
  } else if ("overlay_widget" === category) {
    const intl3 = util.intl;
    return intl3.string(_modDef3868.uVOH1p);
  } else if ("automod" === category) {
    const intl2 = util.intl;
    return intl2.string(_modDef3868["+EKk4D"]);
  } else if ("chat_bot" === category) {
    const intl = util.intl;
    return intl.string(_modDef3868.KBHZfO);
  }
}
export function conjureHomeInspirationEntries() {
  const obj = { id: "server-calendar", category: "apps", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "1" };
  const intl = util.intl;
  obj.shortPrompt = intl.string(_modDef3868.qbaf5O);
  const intl2 = util.intl;
  obj.fullPrompt = intl2.string(_modDef3868.vo1ZBs);
  const intl3 = util.intl;
  obj.name = intl3.string(_modDef3868.Zx7B6B);
  const items = [obj, , , , , , ];
  const obj2 = { id: "cowboy-chat-bot", category: "chat_bot", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "2" };
  const intl4 = util.intl;
  obj2.shortPrompt = intl4.string(_modDef3868.i0y7Ld);
  const intl5 = util.intl;
  obj2.fullPrompt = intl5.string(_modDef3868.Hddwvt);
  const intl6 = util.intl;
  obj2.name = intl6.string(_modDef3868.dLyihE);
  items[1] = obj2;
  const obj3 = { id: "library-voice-channel", category: "games", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "3" };
  const intl7 = util.intl;
  obj3.shortPrompt = intl7.string(_modDef3868.vYjIS6);
  const intl8 = util.intl;
  obj3.fullPrompt = intl8.string(_modDef3868["4pASEG"]);
  const intl9 = util.intl;
  obj3.name = intl9.string(_modDef3868.e8Jbz3);
  items[2] = obj3;
  const obj4 = { id: "flappy-discord", category: "games", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "4" };
  const intl10 = util.intl;
  obj4.shortPrompt = intl10.string(_modDef3868.gtX7tS);
  const intl11 = util.intl;
  obj4.fullPrompt = intl11.string(_modDef3868["Sfa50+"]);
  const intl12 = util.intl;
  obj4.name = intl12.string(_modDef3868.Tbag5k);
  items[3] = obj4;
  const obj5 = { id: "no-yelling", category: "automod", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "5" };
  const intl13 = util.intl;
  obj5.shortPrompt = intl13.string(_modDef3868.H8fuGK);
  const intl14 = util.intl;
  obj5.fullPrompt = intl14.string(_modDef3868.XuiHpi);
  const intl15 = util.intl;
  obj5.name = intl15.string(_modDef3868["5XJ55E"]);
  items[4] = obj5;
  const obj6 = { id: "what-should-we-play", category: "apps", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "6" };
  const intl16 = util.intl;
  obj6.shortPrompt = intl16.string(_modDef3868.tZv5cM);
  const intl17 = util.intl;
  obj6.fullPrompt = intl17.string(_modDef3868.qd87yI);
  const intl18 = util.intl;
  obj6.name = intl18.string(_modDef3868["7KvZ91"]);
  items[5] = obj6;
  const obj7 = { id: "kd-tracker", category: "overlay_widget", shortPrompt: null, fullPrompt: null, name: null, authorAvatarSeed: "7" };
  const intl19 = util.intl;
  obj7.shortPrompt = intl19.string(_modDef3868.tqEROk);
  const intl20 = util.intl;
  obj7.fullPrompt = intl20.string(_modDef3868.yym7Yj);
  const intl21 = util.intl;
  obj7.name = intl21.string(_modDef3868.vRpB6m);
  items[6] = obj7;
  return items;
}