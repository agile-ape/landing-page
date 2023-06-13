
const imageSlots = document.getElementsByClassName("image-slot")

const img = [
    'img/icons/aave.png',
    'img/icons/alpha.png',
    'img/icons/ampl.png',
    'img/icons/apecoin.png',
    'img/icons/ar.png',
    'img/icons/arb.png',
    'img/icons/augur.png',
    'img/icons/axs.png',
    'img/icons/babydoge.png',
    'img/icons/bancor.png',
    'img/icons/bat.png',
    'img/icons/bifi.png',
    'img/icons/bnb.png',
    'img/icons/cake.png',
    'img/icons/comp.png',
    'img/icons/cow.png',
    'img/icons/cream.png',
    'img/icons/crv.png',
    'img/icons/cvx.png',
    'img/icons/dai.png',
    'img/icons/doge.png',
    'img/icons/dydx.png',
    'img/icons/ens.png',
    'img/icons/eth.png',
    'img/icons/fei.png',
    'img/icons/filecoin.png',
    'img/icons/frax.png',
    'img/icons/gamma.png',
    'img/icons/gno.png',
    'img/icons/gtc.png',
    'img/icons/hex.png',
    'img/icons/hnt.png',
    'img/icons/ldo.png',
    'img/icons/link.png',
    'img/icons/mana.png',
    'img/icons/matic.png',
    'img/icons/metis.png',
    'img/icons/mir.png',
    'img/icons/mkr.png',
    'img/icons/nexo.png',
    'img/icons/ogn.png',
    'img/icons/op.png',
    'img/icons/osmo.png',
    'img/icons/pax.png',
    'img/icons/ren.png',
    'img/icons/rook.png',
    'img/icons/rune.png',
    'img/icons/sand.png',
    'img/icons/scrt.png',
    'img/icons/shiba.png',
    'img/icons/snx.png',
    'img/icons/sol.png',
    'img/icons/srm.png',
    'img/icons/steem.png',
    'img/icons/sushi.png',
    'img/icons/ton.png',
    'img/icons/uni.png',
    'img/icons/usdc.png',
    'img/icons/usdt.png',
    'img/icons/xmr.png',
    'img/icons/yfi.png',
];


const randomizedImg = img.sort(() => Math.random() - 0.5);

console.log(randomizedImg);


for (let i = 0; i < imageSlots.length; i++) {
    imageSlots[i].src = `${randomizedImg[i]}`;
  }
