console.log('scripts loaded');


// Emojis from: https://copy.r74n.com/emojis
const emojis = [
    [
        '😀','😃','😄','😁','😆','🤩','😅','😂','🤣','☺️','😊','😇','🙂','🙃','😉','😌','😍','😘','😗','😙','😚','😋','🤪','😜','😝','😛','🤑','🤗','🤓','😎','🤡','🤠','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','😤','😠','😡','🤬','😶','😐','😑','😯','😦','😧','😮','😲','😵','🤯','😳','😱','😨','😰','😢','😥','🤤','😭','😓','😪','😴','🥱','🙄','🤨','🧐','🤔','🤫','🤭','🤥','😬','🤐','🤢','🤮','🤧','😷','🤒','🤕','😈','👿','👹','👺','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','👐','🙌','👏','🙏','🤲','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤘','🤏','👌','👈','👉','👆','👇','☝️','✋','🤚','🖐','🖖','👋','🤙','💪','🖕','🤟','✍️','🤳','💅','🖖','💄','💋','👄','👅','👂','🦻','👃','🦵','🦶','🦾','🦿','👣','👁','👀','🗣','👤','👥','👶','👦','👧','🧒','👨','👩','🧑','👱‍♀️','👱','🧔','👴','👵','🧓','👲','👳‍♀️','👳','🧕','👮‍♀️','👮','👷‍♀️','👷','💂‍♀️','💂','🕵️‍♀️','🕵️','👩‍⚕️','👨‍⚕️','👩‍🌾','👨‍🌾','👩‍🍳','👨‍🍳','👩‍🎓','👨‍🎓','👩‍🎤','👨‍🎤','👩‍🏫','👨‍🏫','👩‍🏭','👨‍🏭','👩‍💻','👨‍💻','👩‍💼','👨‍💼','👩‍🔧','👨‍🔧','👩‍🔬','👨‍🔬','👩‍🎨','👨‍🎨','👩‍🚒','👨‍🚒','👩‍✈️','👨‍✈️','👩‍🚀','👨‍🚀','👩‍⚖️','👨‍⚖️','🤶','🎅','👸','🤴','👰','🤵','👼','🤰','🤱','🙇‍♀️','🙇','💁','💁‍♂️','🙅','🙅‍♂️','🙆','🙆‍♂️','🙋','🙋‍♂️','🤦‍♀️','🤦‍♂️','🤷‍♀️','🤷‍♂️','🙎','🙎‍♂️','🙍','🙍‍♂️','💇','💇‍♂️','💆','💆‍♂️','🧖‍♀️','🧖‍♂️','🧏','🧏‍♂️','🧏‍♀️','🧙‍♀️','🧙‍♂️','🧛‍♀️','🧛‍♂️','🧟‍♀️','🧟‍♂️','🧚‍♀️','🧚‍♂️','🧜‍♀️','🧜‍♂️','🧝‍♀️','🧝‍♂️','🧞‍♀️','🧞‍♂️','🕴','💃','🕺','👯','👯‍♂️','🚶‍♀️','🚶','🏃‍♀️','🏃','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','👨‍🦯','👩‍🦯','👨‍🦼','👩‍🦼','👨‍🦽','👩‍🦽','🧑‍🤝‍🧑','👫','👭','👬','💑','👩‍❤️‍👩','👨‍❤️‍👨','💏','👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','👪','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👦','👩‍👧','👩‍👧‍👦','👩‍👦‍👦','👩‍👧‍👧','👨‍👦','👨‍👧','👨‍👧‍👦','👨‍👦‍👦','👨‍👧‍👧','👚','👕','👖','👔','👗','👙','👘','👠','👡','👢','👞','👟','👒','🎩','🎓','👑','⛑','🎒','👝','👛','👜','💼','👓','🕶','🤿','🌂','☂️','🧣','🧤','🧥','🦺','🥻','🩱','🩲','🩳','🩰','🧦','🧢','⛷','🏂','🏋️‍♀️','🏋️','🤺','🤼‍♀️','🤼‍♂️','🤸‍♀️','🤸‍♂️','⛹️‍♀️','⛹️','🤾‍♀️','🤾‍♂️','🏌️‍♀️','🏌️','🏄‍♀️','🏄','🏊‍♀️','🏊','🤽‍♀️','🤽‍♂️','🚣‍♀️','🚣','🏇','🚴‍♀️','🚴','🚵‍♀️','🚵','🤹‍♀️','🤹‍♂️','🧗‍♀️','🧗‍♂️','🧘‍♀️','🧘‍♂️','🥰','🥵','🥶','🥳','🥴','🥺','🦸','🦹','🧑‍🦰','🧑‍🦱','🧑‍🦳','🧑‍🦲','🧑‍⚕️','🧑‍🎓','🧑‍🏫','🧑‍⚖️','🧑‍🌾','🧑‍🍳','🧑‍🔧','🧑‍🏭','🧑‍💼','🧑‍🔬','🧑‍💻','🧑‍🎤','🧑‍🎨','🧑‍✈️','🧑‍🚀','🧑‍🚒','🧑‍🦯','🧑‍🦼','🧑‍🦽','🦰','🦱','🦲','🦳'
    ],
    [
        '👐🏻','🙌🏻','👏🏻','🙏🏻','👍🏻','👎🏻','👊🏻','✊🏻','🤛🏻','🤜🏻','🤞🏻','✌🏻','🤘🏻','👌🏻','👈🏻','👉🏻','👆🏻','👇🏻','☝🏻','✋🏻','🤚🏻','🖐🏻','🖖🏻','👋🏻','🤙🏻','💪🏻','🖕🏻','✍🏻','🤳🏻','💅🏻','👂🏻','👃🏻','👶🏻','👦🏻','👧🏻','👨🏻','👩🏻','👱🏻‍♀️','👱🏻','👴🏻','👵🏻','👲🏻','👳🏻‍♀️','👳🏻','👮🏻‍♀️','👮🏻','👷🏻‍♀️','👷🏻','💂🏻‍♀️','💂🏻','🕵🏻‍♀️','🕵🏻','👩🏻‍⚕️','👨🏻‍⚕️','👩🏻‍🌾','👨🏻‍🌾','👩🏻‍🍳','👨🏻‍🍳','👩🏻‍🎓','👨🏻‍🎓','👩🏻‍🎤','👨🏻‍🎤','👩🏻‍🏫','👨🏻‍🏫','👩🏻‍🏭','👨🏻‍🏭','👩🏻‍💻','👨🏻‍💻','👩🏻‍💼','👨🏻‍💼','👩🏻‍🔧','👨🏻‍🔧','👩🏻‍🔬','👨🏻‍🔬','👩🏻‍🎨','👨🏻‍🎨','👩🏻‍🚒','👨🏻‍🚒','👩🏻‍✈️','👨🏻‍✈️','👩🏻‍🚀','👨🏻‍🚀','👩🏻‍⚖️','👨🏻‍⚖️','🤶🏻','🎅🏻','👸🏻','🤴🏻','👰🏻','🤵🏻','👼🏻','🤰🏻','🙇🏻‍♀️','🙇🏻','💁🏻','💁🏻‍♂️','🙅🏻','🙅🏻‍♂️','🙆🏻','🙆🏻‍♂️','🙋🏻','🙋🏻‍♂️','🤦🏻‍♀️','🤦🏻‍♂️','🤷🏻‍♀️','🤷🏻‍♂️','🙎🏻','🙎🏻‍♂️','🙍🏻','🙍🏻‍♂️','💇🏻','💇🏻‍♂️','💆🏻','💆🏻‍♂️','🕴🏻','💃🏻','🕺🏻','🚶🏻‍♀️','🚶🏻','🏃🏻‍♀️','🏃🏻','🏋🏻‍♀️','🏋🏻','🤸🏻‍♀️','🤸🏻‍♂️','⛹🏻‍♀️','⛹🏻','🤾🏻‍♀️','🤾🏻‍♂️','🏌🏻‍♀️','🏌🏻','🏄🏻‍♀️','🏄🏻','🏊🏻‍♀️','🏊🏻','🤽🏻‍♀️','🤽🏻‍♂️','🚣🏻‍♀️','🚣🏻','🏇🏻','🚴🏻‍♀️','🚴🏻','🚵🏻‍♀️','🚵🏻','🤹🏻‍♀️','🤹🏻‍♂️','🛀🏻','🧒🏻','🧑🏻','🧕🏻','🧔🏻','🤱🏻','🧙🏻‍♀️','🧙🏻‍♂️','🧚🏻‍♀️','🧚🏻‍♂️','🧛🏻‍♀️','🧛🏻‍♂️','🧜🏻‍♀️','🧜🏻‍♂️','🧝🏻‍♀️','🧝🏻‍♂️','🧖🏻‍♀️','🧖🏻‍♂️','🧗🏻‍♀️','🧗🏻‍♂️','🧘🏻‍♀️','🧘🏻‍♂️','🤟🏻','🤲🏻','💏🏻','💑🏻','🤏🏻','🦻🏻','🧏🏻','🧏🏻‍♂️','🧏🏻‍♀️','🧍🏻','🧍🏻‍♂️','🧍🏻‍♀️','🧎🏻','🧎🏻‍♂️','🧎🏻‍♀️','👨🏻‍🦯','👩🏻‍🦯','👨🏻‍🦼','👩🏻‍🦼','👨🏻‍🦽','👩🏻‍🦽','🧑🏻‍🤝‍🧑🏻','🧑🏻‍🦰','🧑🏻‍🦱','🧑🏻‍🦳','🧑🏻‍🦲','🧑🏻‍⚕️','🧑🏻‍🎓','🧑🏻‍🏫','🧑🏻‍⚖️','🧑🏻‍🌾','🧑🏻‍🍳','🧑🏻‍🔧','🧑🏻‍🏭','🧑🏻‍💼','🧑🏻‍🔬','🧑🏻‍💻','🧑🏻‍🎤','🧑🏻‍🎨','🧑🏻‍✈️','🧑🏻‍🚀','🧑🏻‍🚒','🧑🏻‍🦯','🧑🏻‍🦼','🧑🏻‍🦽'  
    ],
    [
        '👐🏼','🙌🏼','👏🏼','🙏🏼','👍🏼','👎🏼','👊🏼','✊🏼','🤛🏼','🤜🏼','🤞🏼','✌🏼','🤘🏼','👌🏼','👈🏼','👉🏼','👆🏼','👇🏼','☝🏼','✋🏼','🤚🏼','🖐🏼','🖖🏼','👋🏼','🤙🏼','💪🏼','🖕🏼','✍🏼','🤳🏼','💅🏼','👂🏼','👃🏼','👶🏼','👦🏼','👧🏼','👨🏼','👩🏼','👱🏼‍♀️', '👱🏼','👴🏼','👵🏼','👲🏼','👳🏼‍♀️','👳🏼','👮🏼‍♀️','👮🏼','👷🏼‍♀️','👷🏼','💂🏼‍♀️','💂🏼','🕵🏼‍♀️','🕵🏼','👩🏼‍⚕️','👨🏼‍⚕️','👩🏼‍🌾','👨🏼‍🌾','👩🏼‍🍳','👨🏼‍🍳','👩🏼‍🎓','👨🏼‍🎓','👩🏼‍🎤','👨🏼‍🎤','👩🏼‍🏫','👨🏼‍🏫','👩🏼‍🏭','👨🏼‍🏭','👩🏼‍💻','👨🏼‍💻','👩🏼‍💼','👨🏼‍💼','👩🏼‍🔧','👨🏼‍🔧','👩🏼‍🔬','👨🏼‍🔬','👩🏼‍🎨','👨🏼‍🎨','👩🏼‍🚒','👨🏼‍🚒','👩🏼‍✈️','👨🏼‍✈️','👩🏼‍🚀','👨🏼‍🚀','👩🏼‍⚖️','👨🏼‍⚖️','🤶🏼','🎅🏼','👸🏼','🤴🏼','👰🏼','🤵🏼','👼🏼','🤰🏼','🙇🏼‍♀️','🙇🏼','💁🏼','💁🏼‍♂️','🙅🏼','🙅🏼‍♂️','🙆🏼','🙆🏼‍♂️','🙋🏼','🙋🏼‍♂️','🤦🏼‍♀️','🤦🏼‍♂️','🤷🏼‍♀️','🤷🏼‍♂️','🙎🏼','🙎🏼‍♂️','🙍🏼','🙍🏼‍♂️','💇🏼','💇🏼‍♂️','💆🏼','💆🏼‍♂️', '🕴🏼','💃🏼','🕺🏼','🚶🏼‍♀️','🚶🏼','🏃🏼‍♀️','🏃🏼','🏋🏼‍♀️','🏋🏼','🤸🏼‍♀️','🤸🏼‍♂️','⛹🏼‍♀️','⛹🏼','🤾🏼‍♀️','🤾🏼‍♂️','🏌🏼‍♀️','🏌🏼','🏄🏼‍♀️','🏄🏼','🏊🏼‍♀️','🏊🏼','🤽🏼‍♀️','🤽🏼‍♂️','🚣🏼‍♀️','🚣🏼','🏇🏼','🚴🏼‍♀️','🚴🏼','🚵🏼‍♀️','🚵🏻','🤹🏼‍♀️','🤹🏼‍♂️','🛀🏼','🧒🏼','🧑🏼','🧓🏼','🧕🏼','🧔🏼','🤱🏼','🧙🏼‍♀️','🧙🏼‍♂️','🧚🏼‍♀️','🧚🏼‍♂️','🧛🏼‍♀️','🧛🏼‍♂️','🧜🏼‍♀️','🧜🏼‍♂️','🧝🏼‍♀️','🧝🏼‍♂️','🧖🏼‍♀️','🧖🏼‍♂️','🧗🏼‍♀️','🧗🏼‍♂️','🧘🏼‍♂️','🤟🏼','🤲🏼','💏🏼','💑🏼','🤏🏼','🦻🏼','🧏🏼','🧏🏼‍♂️','🧏🏼‍♀️','🧍🏼','🧍🏼‍♂️','🧍🏼‍♀️','🧎🏼','🧎🏼‍♂️','🧎🏼‍♀️','👨🏼‍🦯','👩🏼‍🦯','👨🏼‍🦼','👩🏼‍🦼','👨🏼‍🦽','👩🏼‍🦽','🧑🏼‍🤝‍🧑🏼','🧑🏼‍🦰','🧑🏼‍🦱','🧑🏼‍🦳','🧑🏼‍🦲','🧑🏼‍⚕️','🧑🏼‍🎓','🧑🏼‍🏫','🧑🏼‍⚖️','🧑🏼‍🌾','🧑🏼‍🍳','🧑🏼‍🔧','🧑🏼‍🏭','🧑🏼‍💼','🧑🏼‍🔬','🧑🏼‍💻','🧑🏼‍🎤','🧑🏼‍🎨','🧑🏼‍✈️','🧑🏼‍🚀','🧑🏼‍🚒','🧑🏼‍🦯','🧑🏼‍🦼','🧑🏼‍🦽'
    ],
    [
        '👐🏽','🙌🏽','👏🏽','🙏🏽','👍🏽','👎🏽','👊🏽','✊🏽','🤛🏽','🤜🏽','🤞🏽','✌🏽','🤘🏽','👌🏽','👈🏽','👉🏽','👆🏽','👇🏽','☝🏽','✋🏽','🤚🏽','🖐🏽','🖖🏽','👋🏽','🤙🏽','💪🏽','🖕🏽','✍🏽','🤳🏽','💅🏽','👂🏽','👃🏽','👶🏽','👦🏽','👧🏽','👨🏽','👩🏽','👱🏽‍♀️','👱🏽','👴🏽','👵🏽','👲🏽','👳🏽‍♀️','👳🏽','👮🏽‍♀️','👮🏽','👷🏽‍♀️','👷🏽','💂🏽‍♀️','💂🏽','🕵🏽‍♀️','🕵🏽','👩🏽‍⚕️','👨🏽‍⚕️','👩🏽‍🌾','👨🏽‍🌾','👩🏽‍🍳','👨🏽‍🍳','👩🏽‍🎓','👨🏽‍🎓','👩🏽‍🎤','👨🏽‍🎤','👩🏽‍🏫','👨🏽‍🏫','👩🏽‍🏭','👨🏽‍🏭','👩🏽‍💻','👨🏽‍💻','👩🏽‍💼','👨🏽‍💼','👩🏽‍🔧','👨🏽‍🔧','👩🏽‍🔬','👨🏽‍🔬','👩🏽‍🎨','👨🏽‍🎨','👩🏽‍🚒','👨🏽‍🚒','👩🏽‍✈️','👨🏽‍✈️','👩🏽‍🚀','👨🏽‍🚀','👩🏽‍⚖️','👨🏽‍⚖️','🤶🏽','🎅🏽','👸🏽','🤴🏽','👰🏽','🤵🏽','👼🏽','🤰🏽','🙇🏽‍♀️','🙇🏽','💁🏽','💁🏽‍♂️','🙅🏽','🙅🏽‍♂️','🙆🏽','🙆🏽‍♂️','🙋🏽','🙋🏽‍♂️','🤦🏽‍♀️','🤦🏽‍♂️','🤷🏽‍♀️','🤷🏽‍♂️','🙎🏽','🙎🏽‍♂️','🙍🏽','🙍🏽‍♂️','💇🏽','💇🏽‍♂️','💆🏽','💆🏽‍♂️','🕴🏼','💃🏽','🕺🏽','🚶🏽‍♀️','🚶🏽','🏃🏽‍♀️','🏃🏽','🏋🏽‍♀️','🏋🏽','🤸🏽‍♀️','🤸🏽‍♂️','⛹🏽‍♀️','⛹🏽','🤾🏽‍♀️','🤾🏽‍♂️','🏌🏽‍♀️','🏌🏽','🏄🏽‍♀️','🏄🏽','🏊🏽‍♀️','🏊🏽','🤽🏽‍♀️','🤽🏽‍♂️','🚣🏽‍♀️','🚣🏽','🏇🏽','🚴🏽‍♀️','🚴🏽','🚵🏽‍♀️','🚵🏽','🤹🏽‍♀️','🤹🏽‍♂️','🛀🏽','🧒🏽','🧑🏽','🧓🏽','🧕🏽','🧔🏽','🤱🏽','🧙🏽‍♀️','🧙🏽‍♂️','🧚🏽‍♀️','🧚🏽‍♂️','🧛🏽‍♀️','🧛🏽‍♂️','🧜🏽‍♀️','🧜🏽‍♂️','🧝🏽‍♀️','🧝🏽‍♂️','🧖🏽‍♀️','🧖🏽‍♂️','🧗🏽‍♀️','🧗🏽‍♂️','🧘🏽‍♀️','🧘🏽‍♂️','🤟🏽','🤲🏽','💏🏽','💑🏽','🤏🏽','🦻🏽','🧏🏽','🧏🏽‍♂️','🧏🏽‍♀️','🧍🏽','🧍🏽‍♂️','🧍🏽‍♀️','🧎🏽','🧎🏽‍♂️','🧎🏽‍♀️','👨🏽‍🦯','👩🏽‍🦯','👨🏽‍🦼','👩🏽‍🦼','👨🏽‍🦽','👩🏽‍🦽','🧑🏽‍🤝‍🧑🏽','🧑🏽‍🦰','🧑🏽‍🦱','🧑🏽‍🦳','🧑🏽‍🦲','🧑🏽‍⚕️','🧑🏽‍🎓','🧑🏽‍🏫','🧑🏽‍⚖️','🧑🏽‍🌾','🧑🏽‍🍳','🧑🏽‍🔧','🧑🏽‍🏭','🧑🏽‍💼','🧑🏽‍🔬','🧑🏽‍💻','🧑🏽‍🎤','🧑🏽‍🎨','🧑🏽‍✈️','🧑🏽‍🚀','🧑🏽‍🚒','🧑🏽‍🦯','🧑🏽‍🦼','🧑🏽‍🦽'
    ],
    [
        '👐🏾','🙌🏾','👏🏾','🙏🏾','👍🏾','👎🏾','👊🏾','✊🏾','🤛🏾','🤜🏾','🤞🏾','✌🏾','🤘🏾','👌🏾','👈🏾','👉🏾','👆🏾','👇🏾','☝🏾','✋🏾','🤚🏾','🖐🏾','🖖🏾','👋🏾','🤙🏾','💪🏾','🖕🏾','✍🏾','🤳🏾','💅🏾','👂🏾','👃🏾','👶🏾','👦🏾','👧🏾','👨🏾','👩🏾','👱🏾‍♀️','👱🏾','👴🏾','👵🏾','👲🏾','👳🏾‍♀️','👳🏾','👮🏾‍♀️','👮🏾','👷🏾‍♀️','👷🏾','💂🏾‍♀️','💂🏾','🕵🏾‍♀️','🕵🏾','👩🏾‍⚕️','👨🏾‍⚕️','👩🏾‍🌾','👨🏾‍🌾','👩🏾‍🍳','👨🏾‍🍳','👩🏾‍🎓','👨🏾‍🎓','👩🏾‍🎤','👨🏾‍🎤','👩🏾‍🏫','👨🏾‍🏫','👩🏾‍🏭','👨🏾‍🏭','👩🏾‍💻','👨🏾‍💻','👩🏾‍💼','👨🏾‍💼','👩🏾‍🔧','👨🏾‍🔧','👩🏾‍🔬','👨🏾‍🔬','👩🏾‍🎨','👨🏾‍🎨','👩🏾‍🚒','👨🏾‍🚒','👩🏾‍✈️','👨🏾‍✈️','👩🏾‍🚀','👨🏾‍🚀','👩🏾‍⚖️','👨🏾‍⚖️','🤶🏾','🎅🏾','👸🏾','🤴🏾','👰🏾','🤵🏾','👼🏾','🤰🏾','🙇🏾‍♀️','🙇🏾','💁🏾','💁🏾‍♂️','🙅🏾','🙅🏾‍♂️','🙆🏾','🙆🏾‍♂️','🙋🏾','🙋🏾‍♂️','🤦🏾‍♀️','🤦🏾‍♂️','🤷🏾‍♀️','🤷🏾‍♂️','🙎🏾','🙎🏾‍♂️','🙍🏾','🙍🏾‍♂️','💇🏾','💇🏾‍♂️','💆🏾','💆🏾‍♂️','🕴🏾','💃🏾','🕺🏾','🚶🏾‍♀️','🚶🏾','🏃🏾‍♀️','🏃🏾','🏋🏾‍♀️','🏋🏾','🤸🏾‍♀️','🤸🏾‍♂️','⛹🏾‍♀️','⛹🏾','🤾🏾‍♀️','🤾🏾‍♂️','🏌🏾‍♀️','🏌🏾','🏄🏾‍♀️','🏄🏾','🏊🏾‍♀️','🏊🏾','🤽🏾‍♀️','🤽🏾‍♂️','🚣🏾‍♀️','🚣🏾','🏇🏾','🚴🏾‍♀️','🚴🏾','🚵🏾‍♀️','🚵🏾','🤹🏾‍♀️','🤹🏾‍♂️','🛀🏾','🧒🏾','🧑🏾','🧓🏾','🧕🏾','🧔🏾','🤱🏾','🧙🏾‍♀️','🧙🏾‍♂️','🧚🏾‍♀️','🧚🏾‍♂️','🧛🏾‍♀️','🧛🏾‍♂️','🧜🏾‍♀️','🧜🏾‍♂️','🧝🏾‍♀️','🧝🏾‍♂️','🧖🏾‍♀️','🧖🏾‍♂️','🧗🏾‍♀️','🧗🏾‍♂️','🧘🏾‍♀️','🧘🏾‍♂️','🤟🏾','🤲🏾','💏🏾','💑🏾','🧑🏾‍🦰','🧑🏾‍🦱','🧑🏾‍🦳','🧑🏾‍🦲','🧑🏾‍⚕️','🧑🏾‍🎓','🧑🏾‍🏫','🧑🏾‍⚖️','🧑🏾‍🌾','🧑🏾‍🍳','🧑🏾‍🔧','🧑🏾‍🏭','🧑🏾‍💼','🧑🏾‍🔬','🧑🏾‍💻','🧑🏾‍🎤','🧑🏾‍🎨','🧑🏾‍✈️','🧑🏾‍🚀','🧑🏾‍🚒','🧑🏾‍🦯','🧑🏾‍🦼','🧑🏾‍🦽'
    ],
    [
        '👐🏿','🙌🏿','👏🏿','🙏🏿','👍🏿','👎🏿','👊🏿','✊🏿','🤛🏿','🤜🏿','🤞🏿','✌🏿','🤘🏿','👌🏿','👈🏿','👉🏿','👆🏿','👇🏿','☝🏿','✋🏿','🤚🏿','🖐🏿','🖖🏿','👋🏿','🤙🏿','💪🏿','🖕🏿','✍🏿','🤳🏿','💅🏿','👂🏿','👃🏿','👶🏿','👦🏿','👧🏿','👨🏿','👩🏿','👱🏿‍♀️','👱🏿','👴🏿','👵🏿','👲🏿','👳🏿‍♀️','👳🏿','👮🏿‍♀️','👮🏿','👷🏿‍♀️','👷🏿','💂🏿‍♀️','💂🏿','🕵🏿‍♀️','🕵🏿','👩🏿‍⚕️','👨🏿‍⚕️','👩🏿‍🌾','👨🏿‍🌾','👩🏿‍🍳','👨🏿‍🍳','👩🏿‍🎓','👨🏿‍🎓','👩🏿‍🎤','👨🏿‍🎤','👩🏿‍🏫','👨🏿‍🏫','👩🏿‍🏭','👨🏿‍🏭','👩🏿‍💻','👨🏿‍💻','👩🏿‍💼','👨🏿‍💼','👩🏿‍🔧','👨🏿‍🔧','👩🏿‍🔬','👨🏿‍🔬','👩🏿‍🎨','👨🏿‍🎨','👩🏿‍🚒','👨🏿‍🚒','👩🏿‍✈️','👨🏿‍✈️','👩🏿‍🚀','👨🏿‍🚀','👩🏿‍⚖️','👨🏿‍⚖️','🤶🏿','🎅🏿','👸🏿','🤴🏿','👰🏿','🤵🏿','👼🏿','🤰🏿','🙇🏿‍♀️','🙇🏿','💁🏿','💁🏿‍♂️','🙅🏿','🙅🏿‍♂️','🙆🏿','🙆🏿‍♂️','🙋🏿','🙋🏿‍♂️','🤦🏿‍♀️','🤦🏿‍♂️','🤷🏿‍♀️','🤷🏿‍♂️','🙎🏿','🙎🏿‍♂️','🙍🏿','🙍🏿‍♂️','💇🏿','💇🏿‍♂️','💆🏿','💆🏿‍♂️','🕴🏿','💃🏿','🕺🏿','🚶🏿‍♀️','🚶🏿','🏃🏿‍♀️','🏃🏿','🏋🏿‍♀️','🏋🏿','🤸🏿‍♀️','🤸🏿‍♂️','⛹🏿‍♀️','⛹🏿','🤾🏿‍♀️','🤾🏿‍♂️','🏌🏿‍♀️','🏌🏿','🏄🏿‍♀️','🏄🏿','🏊🏿‍♀️','🏊🏿','🤽🏿‍♀️','🤽🏿‍♂️','🚣🏿‍♀️','🚣🏿','🏇🏿','🚴🏿‍♀️','🚴🏿','🚵🏿‍♀️','🚵🏿','🤹🏿‍♀️','🤹🏿‍♂️','🛀🏿','🧒🏿','🧑🏿','🧓🏿','🧕🏿','🧔🏿','🤱🏿','🧙🏿‍♀️','🧙🏿‍♂️','🧚🏿‍♀️','🧚🏿‍♂️','🧛🏿‍♀️','🧛🏿‍♂️','🧜🏿‍♀️','🧜🏿‍♂️','🧝🏿‍♀️','🧝🏿‍♂️','🧖🏿‍♀️','🧖🏿‍♂️','🧗🏿‍♀️','🧗🏿‍♂️','🧘🏿‍♀️','🧘🏿‍♂️','🤟🏿','🤲🏿','💏🏿','💑🏿','🤏🏿','🦻🏿','🧏🏿','🧏🏿‍♂️','🧏🏿‍♀️','🧍🏿','🧍🏿‍♂️','🧍🏿‍♀️','🧎🏿','🧎🏿‍♂️','🧎🏿‍♀️','👨🏿‍🦯','👩🏿‍🦯','👨🏿‍🦼','👩🏿‍🦼','👨🏿‍🦽','👩🏿‍🦽','🧑🏿‍🤝‍🧑🏿','🧑🏿‍🦰','🧑🏿‍🦱','🧑🏿‍🦳','🧑🏿‍🦲','🧑🏿‍⚕️','🧑🏿‍🎓','🧑🏿‍🏫','🧑🏿‍⚖️','🧑🏿‍🌾','🧑🏿‍🍳','🧑🏿‍🔧','🧑🏿‍🏭','🧑🏿‍💼','🧑🏿‍🔬','🧑🏿‍💻','🧑🏿‍🎤','🧑🏿‍🎨','🧑🏿‍✈️','🧑🏿‍🚀','🧑🏿‍🚒','🧑🏿‍🦯','🧑🏿‍🦼','🧑🏿‍🦽'
    ],
    [
        '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙊','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦩','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐚','🦗','🐞','🐜','🕷','🕸','🐢','🐍','🦎','🦂','🦀','🦑','🐙','🦐','🐠','🐟','🐡','🐬','🦈','🐳','🐋','🐊','🐆','🐅','🐃','🐂','🐄','🦌','🐪','🐫','🐘','🦏','🦍','🐎','🐖','🐐','🐏','🐑','🐕','🐩','🦮','🐕‍🦺','🐈','🐓','🦃','🕊','🐇','🐁','🐀','🐿','🦓','🦒','🦔','🦧','🦥','🦦','🦨','🦕','🦖','🦪','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌻','🌼','🌸','🌺','🌎','🌍','🌏','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌚','🌝','🌞','🌛','🌜','🌙','🪐','💫','⭐️','🌟','✨','⚡️','🔥','💥','☄️','☀️','🌤','⛅️','🌥','🌦','🌈','☁️','🌧','⛈','🌩','🌨','☃️','⛄️','❄️','🌬','💨','🌪','🌫','🌊','💧','💦','☔️'
    ],
    [
        '🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🥝','🥑','🍅','🍆','🥒','🥕','🌽','🌶','🧄','🧅','🥔','🍠','🌰','🥜','🍯','🥐','🍞','🥖','🧀','🥚','🍳','🥓','🥞','🍤','🍗','🍖','🍕','🌭','🍔','🍟','🥙','🌮','🌯','🥗','🥘','🍝','🍜','🍲','🍥','🍣','🍱','🍛','🍚','🍙','🍘','🍢','🍡','🍧','🍨','🍦','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🥛','🍼','☕️','🍵','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🍾','🧃','🧉','🧊','🥄','🍴','🍽','🥥','🥨','🥩','🥪','🥣','🥫','🧇','🧆','🧈','🥟','🥠','🥡','🥧','🥤','🥢'
    ],
    [
        '⚽️','🏀','🏈','⚾️','🎾','🏐','🏉','🎱','🏓','🏸','🥅','🏒','🏑','🏏','⛳️','🏹','🎣','🥊','🥋','⛸','🎿','⛷','🏂','🏋️‍♀️','🏋️','🤺','🤼‍♀️','🤼‍♂️','🤸‍♀️','🤸‍♂️','⛹️‍♀️','⛹️','🤾‍♀️','🤾‍♂️','🏌️‍♀️','🏌️','🏄‍♀️','🏄','🏊‍♀️','🏊','🤽‍♀️','🤽‍♂️','🚣‍♀️','🚣','🏇','🚴‍♀️','🚴','🚵‍♀️','🚵','🪂','🎽','🏅','🎖','🥇','🥈','🥉','🏆','🏵','🎗','🎫','🎟','🎪','🤹‍♀️','🤹‍♂️','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🪕','🎲','🎯','🎳','🎮','🎰','🛷','🥌','🪀','🪁'
    ],
    [
        '🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🛴','🚲','🛵','🛺','🏍','🦽','🦼','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','🚁','🛩','✈️','🛫','🛬','🚀','🛰','💺','🛶','⛵️','🛥','🚤','🛳','⛴','🚢','⚓️','🚧','⛽️','🚏','🚦','🚥','🗺','🗿','🗽','⛲️','🗼','🏰','🏯','🏟','🎡','🎢','🎠','⛱','🏖','🏝','⛰','🏔','🗻','🌋','🏜','🏕','⛺️','🛤','🛣','🏗','🏭','🏠','🏡','🏘','🏚','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛','⛪️','🕌','🕍','🕋','🛕','⛩','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆','🏙','🌃','🌌','🌉','🌁','🛸'
    ],
    [
        '⌚️','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⌛️','⏳','📡','🔋','🔌','💡','🔦','🕯','🗑','🛢','💸','💵','💴','💶','💷','💰','💳','💎','⚖️','🔧','🔨','⚒','🛠','⛏','🔩','⚙️','⛓','🔫','💣','🔪','🗡','⚔️','🪓','🦯','🛡','🚬','⚰️','⚱️','🏺','🔮','📿','💈','⚗️','🔭','🔬','🕳','💊','💉','🩸','🩹','🩺','🌡','🪒','🚽','🚰','🚿','🛁','🛀','🛎','🔑','🗝','🚪','🪑','🛋','🛏','🛌','🖼','🛍','🛒','🎁','🎈','🎏','🎀','🎊','🎉','🎎','🏮','🎐','✉️','📩','📨','📧','💌','📥','📤','📦','🏷','📪','📫','📬','📭','📮','📯','📜','📃','📄','📑','📊','📈','📉','🗒','🗓','📆','📅','📇','🗃','🗳','🗄','📋','📁','📂','🗂','🗞','📰','📓','📔','📒','📕','📗','📘','📙','📚','📖','🔖','🔗','📎','🖇','📐','📏','📌','📍','📌','🎌','🏳️','🏴','🏁','🪔','✂️','🖊','🖋','✒️','🖌','🖍','📝','✏️','🔍','🔎','🔏','🔐','🔒','🔓'
    ],
    [
        '❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚️','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕️','🛑','⛔️','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗️','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯️','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿️','🅿️','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','⏫','⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','↪️','↩️','⤴️','⤵️','🔀','🔁','🔂','🔄','🔃','🎵','🎶','➕','➖','➗','✖️','💲','💱','™️','©️','®️','〰️','➰','➿','🔚','🔙','🔛','🔝','✔️','☑️','🔘','🔴','🟠','🟡','🟢','🔵','🟣','⚫️','⚪️','🟤','🔺','🔻','🔸','🔹','🔶','🔷','🔳','🔲','▪️','▫️','◾️','◽️','◼️','◻️','⬛️','⬜️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','👁‍🗨','💬','💭','🗯','♠️','♣️','♥️','♦️','🃏','🎴','🀄️','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦','🕧','⏏','♀','♂','⚕','♾️'
    ],
    [
        '🧑‍🤝‍🧑','🧑🏻‍🤝‍🧑🏻','🧑🏼‍🤝‍🧑🏻','🧑🏼‍🤝‍🧑🏼','🧑🏽‍🤝‍🧑🏻','🧑🏽‍🤝‍🧑🏼','🧑🏽‍🤝‍🧑🏽','🧑🏾‍🤝‍🧑🏻','🧑🏾‍🤝‍🧑🏼','🧑🏾‍🤝‍🧑🏽','🧑🏾‍🤝‍🧑🏾','🧑🏿‍🤝‍🧑🏻','🧑🏿‍🤝‍🧑🏼','🧑🏿‍🤝‍🧑🏽','🧑🏿‍🤝‍🧑🏾','🧑🏿‍🤝‍🧑🏿','👭🏻','👩🏼‍🤝‍👩🏻','👭🏼','👩🏽‍🤝‍👩🏻','👩🏽‍🤝‍👩🏼','👭🏽','👩🏾‍🤝‍👩🏻','👩🏾‍🤝‍👩🏼','👩🏾‍🤝‍👩🏽','👭🏾','👩🏿‍🤝‍👩🏻','👩🏿‍🤝‍👩🏼','👩🏿‍🤝‍👩🏽','👩🏿‍🤝‍👩🏾','👭🏿','👫🏻','👩🏻‍🤝‍👨🏼','👩🏻‍🤝‍👨🏽','👩🏻‍🤝‍👨🏾','👩🏻‍🤝‍👨🏿','👩🏼‍🤝‍👨🏻','👫🏼','👩🏼‍🤝‍👨🏽','👩🏼‍🤝‍👨🏾','👩🏼‍🤝‍👨🏿','👩🏽‍🤝‍👨🏻','👩🏽‍🤝‍👨🏼','👫🏽','👩🏽‍🤝‍👨🏾','👩🏽‍🤝‍👨🏿','👩🏾‍🤝‍👨🏻','👩🏾‍🤝‍👨🏼','👩🏾‍🤝‍👨🏽','👫🏾','👩🏾‍🤝‍👨🏿','👩🏿‍🤝‍👨🏻','👩🏿‍🤝‍👨🏼','👩🏿‍🤝‍👨🏽','👩🏿‍🤝‍👨🏾','👫🏿','👬🏻','👨🏼‍🤝‍👨🏻','👬🏼','👨🏽‍🤝‍👨🏻','👨🏽‍🤝‍👨🏼','👬🏽','👨🏾‍🤝‍👨🏻','👨🏾‍🤝‍👨🏼','👨🏾‍🤝‍👨🏽','👬🏾','👨🏿‍🤝‍👨🏻','👨🏿‍🤝‍👨🏼','👨🏿‍🤝‍👨🏽','👨🏿‍🤝‍👨🏾','👬🏿'
    ],
    [
        '🏴','🇦🇫','🇦🇽','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇻','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇮🇨','🇨🇻','🇧🇶','🇰🇾','🇨🇫','🇪🇦','🇹🇩','🇨🇱','🇨🇳','🇨🇽','🇨🇵','🇨🇨','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇰','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇩🇰','🇩🇬','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇪🇺','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇹🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇬','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇲','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇯🇲','🇯🇵','🇯🇪','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇳🇫','🇲🇵','🇰🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🇿🇦','🇬🇸','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇸🇩','🇸🇷','🇸🇯','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇱','🇹🇬','🇹🇰','🇹🇴','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇺🇾','🇺🇲','🇺🇳','🇻🇮','🇺🇿','🇻🇺','🇻🇦','🇻🇪', '🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼','🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿','🏳️‍🌈','🏴‍☠️'
    ],
    /*
    [
        '◯‍◯‍◯‍◯‍◯','🐱‍👓','🐱‍👤','🐱‍🚀','🐱‍🐉','🐱‍💻','🐱‍🏍'
    ],*/
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomEmoji() {
    const randomCategoryIndex = getRandomInt(0, emojis.length);
    console.log('category:', randomCategoryIndex)
    const category = emojis[randomCategoryIndex]
    const randomEmojiIndex = getRandomInt(0, category.length - 1);
    const randomEmoji = category[randomEmojiIndex]
    return randomEmoji;
}

$(document).ready(function(){
    $("#inputText").on("input", function(){
        // Print entered value in a div box
        const input = $(this)
        let emoji = getRandomEmoji();
        console.log('emoji:', emoji)
        let output = input.val().replace(/\s/g, emoji)
        input.val(output)
    });
});


$(document).ready(function(){
    $(".random-emoji").each(function( index ) {
        $(this).text(getRandomEmoji())
    });
});


function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
            succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

document.getElementById("copyToClipboard").addEventListener("click", function() {
    copyToClipboard(document.getElementById("inputText"));
    $('#copyAlert').collapse('show')
    setTimeout(function(){ 
        $('#copyAlert').collapse('hide')
      }  , 1500 );
});