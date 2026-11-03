// === Module 1686: insets ===

// Module 1686 (insets)
const items = [{ code: "(function pnpm_insetsTs1(value){return{top:value,bottom:value,left:value,right:value};})" }];
[tmp2] = items;
function pnpm_insetsTs1(top) {
  const rect = { top, bottom: top, left: top, right: top };
  return rect;
}
pnpm_insetsTs1.__workletHash = 11197232689488;
pnpm_insetsTs1.__initData = tmp2;
const items1 = [{ code: "(function pnpm_insetsTs2(value){return{top:value,bottom:value};})" }];
[tmp3] = items1;
function pnpm_insetsTs2(top) {
  const rect = { top, bottom: top };
  return rect;
}
pnpm_insetsTs2.__workletHash = 10851053591080;
pnpm_insetsTs2.__initData = tmp3;
const items2 = [{ code: "(function pnpm_insetsTs3(value){return{left:value,right:value};})" }];
[tmp4] = items2;
function pnpm_insetsTs3(left) {
  const rect = { left, right: left };
  return rect;
}
pnpm_insetsTs3.__workletHash = 13728621516086;
pnpm_insetsTs3.__initData = tmp4;

export const processInset = pnpm_insetsTs1;
export const processInsetBlock = pnpm_insetsTs2;
export const processInsetInline = pnpm_insetsTs3;