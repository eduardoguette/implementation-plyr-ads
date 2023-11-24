 
import plyrAds from 'plyr-ads'
import 'plyr/dist/plyr.css'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  var player = plyr.setup()
  plyrAds.setup(player, {
    adTagUrl: 'https://des.smartclip.net/ads?t=de&p=9372&pl=testc&test=vast2&sz=400x320&rnd=[random]&ref=[REFERRER_URL]&api=2&consent=[consent]',
    autoPlayAdBreaks: true,
  })
})
