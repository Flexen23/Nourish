// Nutrition values are approximate reference estimates per 100 g edible portion.
// This starter catalog is not exhaustive or an independently verified database.
// Brand recipes, portions and nutrition vary by location and preparation.
const food = (id,name,category,cals,p,c,f,servings=[],brand='Generic') => ({id,name,brand,category,calories:cals,protein:p,carbs:c,fat:f,source:'Approximate reference estimate; check the product label.',servings:[{label:'100 g',grams:100},{label:'1 g',grams:1},...servings.map(([label,grams])=>({label,grams}))]});
export const FOODS = [
 food('oats','Rolled oats, dry','Ingredients',389,16.9,66.3,6.9,[['½ cup dry',40],['1 cup dry',80]]),
 food('yogurt','Greek yogurt, plain, nonfat','Dairy',59,10.3,3.6,.4,[['¾ cup',170],['1 cup',227]]),
 food('banana','Banana','Fruit',89,1.1,22.8,.3,[['1 medium',118],['1 cup sliced',150]]),
 food('blueberries','Blueberries','Fruit',57,.7,14.5,.3,[['½ cup',74],['1 cup',148]]),
 food('strawberries','Strawberries','Fruit',32,.7,7.7,.3,[['1 cup halved',152]]),
 food('apple','Apple, with skin','Fruit',52,.3,13.8,.2,[['1 medium',182],['1 cup sliced',109]]),
 food('orange','Orange','Fruit',47,.9,11.8,.1,[['1 medium',131]]),
 food('avocado','Avocado','Fruit',160,2,8.5,14.7,[['½ avocado',75],['1 cup cubed',150]]),
 food('grapes','Grapes','Fruit',69,.7,18.1,.2,[['1 cup',151]]),
 food('mango','Mango','Fruit',60,.8,15,.4,[['1 cup pieces',165]]),
 food('pineapple','Pineapple','Fruit',50,.5,13.1,.1,[['1 cup chunks',165]]),
 food('pear','Pear','Fruit',57,.4,15.2,.1,[['1 medium',178]]),
 food('watermelon','Watermelon','Fruit',30,.6,7.6,.2,[['1 cup diced',152]]),
 food('egg','Whole egg','Protein',143,12.6,.7,9.5,[['1 large',50],['2 large',100]]),
 food('eggwhite','Egg whites','Protein',52,10.9,.7,.2,[['1 large white',33],['½ cup',122]]),
 food('chicken','Chicken breast, cooked','Protein',165,31,0,3.6,[['3 oz',85],['1 cup chopped',140]]),
 food('chickenthigh','Chicken thigh, cooked, skinless','Protein',209,26,0,10.9,[['3 oz',85]]),
 food('turkey','Ground turkey, 93% lean, cooked','Protein',203,27.4,0,10.1,[['3 oz',85]]),
 food('beef','Ground beef, 90% lean, cooked','Protein',230,28.5,0,12.3,[['3 oz',85]]),
 food('salmon','Salmon, cooked','Protein',206,22.1,0,12.4,[['3 oz',85],['1 fillet',170]]),
 food('tuna','Canned tuna in water, drained','Protein',116,25.5,0,.8,[['1 can drained',113]]),
 food('shrimp','Shrimp, cooked','Protein',99,24,0,.3,[['3 oz',85]]),
 food('tofu','Tofu, firm','Protein',144,17.3,2.8,8.7,[['½ cup',126]]),
 food('tempeh','Tempeh','Protein',193,20.3,7.6,10.8,[['3 oz',85]]),
 food('lentils','Lentils, cooked','Protein',116,9,20.1,.4,[['½ cup',99],['1 cup',198]]),
 food('chickpeas','Chickpeas, cooked','Protein',164,8.9,27.4,2.6,[['½ cup',82],['1 cup',164]]),
 food('blackbeans','Black beans, cooked','Protein',132,8.9,23.7,.5,[['½ cup',86],['1 cup',172]]),
 food('kidneybeans','Kidney beans, cooked','Protein',127,8.7,22.8,.5,[['½ cup',89],['1 cup',177]]),
 food('edamame','Edamame, shelled, cooked','Protein',121,11.9,8.9,5.2,[['½ cup',78]]),
 food('rice','Brown rice, cooked','Grains',123,2.7,25.6,1,[['½ cup',98],['1 cup',195]]),
 food('whiterice','White rice, cooked','Grains',130,2.7,28.2,.3,[['½ cup',79],['1 cup',158]]),
 food('quinoa','Quinoa, cooked','Grains',120,4.4,21.3,1.9,[['½ cup',93],['1 cup',185]]),
 food('pasta','Whole-wheat pasta, cooked','Grains',149,6,30.1,1.7,[['1 cup',140]]),
 food('bread','Whole-wheat bread','Grains',247,13,41.3,4.2,[['1 slice',28]]),
 food('tortilla','Whole-wheat tortilla','Grains',310,9,52,8.3,[['1 medium tortilla',49]]),
 food('potato','Potato, baked with skin','Vegetables',93,2.5,21.2,.1,[['1 medium',173]]),
 food('sweetpotato','Sweet potato, baked','Vegetables',90,2,20.7,.2,[['1 medium',114],['1 cup cubes',200]]),
 food('broccoli','Broccoli, steamed','Vegetables',35,2.4,7.2,.4,[['1 cup chopped',156]]),
 food('spinach','Spinach, raw','Vegetables',23,2.9,3.6,.4,[['1 cup',30]]),
 food('kale','Kale, raw','Vegetables',35,2.9,4.4,1.5,[['1 cup chopped',21]]),
 food('carrot','Carrot, raw','Vegetables',41,.9,9.6,.2,[['1 medium',61],['1 cup chopped',128]]),
 food('pepper','Bell pepper, red, raw','Vegetables',31,1,6,.3,[['1 medium',119],['1 cup chopped',149]]),
 food('tomato','Tomato, raw','Vegetables',18,.9,3.9,.2,[['1 medium',123],['1 cup chopped',180]]),
 food('cucumber','Cucumber, with peel','Vegetables',15,.7,3.6,.1,[['1 cup sliced',104]]),
 food('zucchini','Zucchini, raw','Vegetables',17,1.2,3.1,.3,[['1 cup chopped',124]]),
 food('mushrooms','White mushrooms, raw','Vegetables',22,3.1,3.3,.3,[['1 cup sliced',70]]),
 food('onion','Onion, raw','Vegetables',40,1.1,9.3,.1,[['½ cup chopped',80]]),
 food('peas','Green peas, cooked','Vegetables',84,5.4,15.6,.2,[['½ cup',80]]),
 food('corn','Sweet corn, cooked','Vegetables',96,3.4,21,1.5,[['½ cup',82]]),
 food('milk','Milk, 2%','Drinks',50,3.3,4.8,2,[['1 cup / 240 ml',244]]),
 food('almondmilk','Almond milk, unsweetened','Drinks',15,.6,.6,1.2,[['1 cup / 240 ml',240]]),
 food('soymilk','Soy milk, unsweetened','Drinks',33,2.9,1.7,1.8,[['1 cup / 240 ml',243]]),
 food('coffee','Black coffee','Drinks',1,.1,0,0,[['1 cup / 240 ml',237]]),
 food('tea','Tea, brewed, unsweetened','Drinks',1,0,.3,0,[['1 cup / 240 ml',237]]),
 food('water','Water','Drinks',0,0,0,0,[['1 glass / 250 ml',250],['1 bottle / 500 ml',500]]),
 food('orangejuice','Orange juice','Drinks',45,.7,10.4,.2,[['1 cup / 240 ml',248]]),
 food('cola','Cola, regular','Drinks',42,0,10.6,0,[['1 can / 355 ml',370]]),
 food('beer','Beer, regular','Drinks',43,.5,3.6,0,[['1 bottle / 355 ml',355]]),
 food('cottagecheese','Cottage cheese, 2%','Dairy',81,10.5,4.8,2.3,[['½ cup',113]]),
 food('cheddar','Cheddar cheese','Dairy',403,24.9,1.3,33.1,[['1 oz',28],['¼ cup shredded',28]]),
 food('feta','Feta cheese','Dairy',264,14.2,4.1,21.3,[['¼ cup crumbled',38]]),
 food('mozzarella','Mozzarella, part-skim','Dairy',254,24.3,2.8,15.9,[['1 oz',28]]),
 food('peanutbutter','Peanut butter','Ingredients',588,25.1,20,50.4,[['1 tablespoon',16],['2 tablespoons',32]]),
 food('almonds','Almonds','Ingredients',579,21.2,21.6,49.9,[['1 oz / small handful',28],['¼ cup',36]]),
 food('walnuts','Walnuts','Ingredients',654,15.2,13.7,65.2,[['1 oz',28],['¼ cup chopped',29]]),
 food('chia','Chia seeds','Ingredients',486,16.5,42.1,30.7,[['1 tablespoon',12],['2 tablespoons',24]]),
 food('oliveoil','Olive oil','Ingredients',884,0,0,100,[['1 teaspoon',4.5],['1 tablespoon',13.5]]),
 food('honey','Honey','Ingredients',304,.3,82.4,0,[['1 teaspoon',7],['1 tablespoon',21]]),
 food('flour','All-purpose flour','Ingredients',364,10.3,76.3,1,[['¼ cup',31],['1 cup',125]]),
 food('sugar','Granulated sugar','Ingredients',387,0,100,0,[['1 teaspoon',4],['1 tablespoon',12.5],['1 cup',200]]),
 food('hummus','Hummus','Ingredients',166,7.9,14.3,9.6,[['2 tablespoons',30]]),
 food('salsa','Tomato salsa','Ingredients',29,1.5,6.6,.2,[['2 tablespoons',32]]),
 food('darkchocolate','Dark chocolate, 70–85%','Snacks',598,7.8,45.9,42.6,[['1 oz',28]]),
 food('popcorn','Popcorn, air-popped','Snacks',387,12.9,77.8,4.5,[['1 cup',8]]),
 food('whey','Whey protein powder','Ingredients',400,80,8,5,[['1 scoop',30]]),
 food('bigmac','Big Mac burger','Fast food',257,11.6,18.8,14,[['1 burger, approximate',219]],'McDonald’s — estimated'),
 food('mcdfries','French fries, medium','Fast food',312,3.4,41.4,15,[['1 medium portion, approximate',117]],'McDonald’s — estimated'),
 food('mcdnuggets','Chicken nuggets','Fast food',296,15.2,17.5,18.7,[['6 pieces, approximate',95]],'McDonald’s — estimated'),
 food('chickenburger','Grilled chicken sandwich','Fast food',188,14,18,6.5,[['1 sandwich, approximate',206]],'Restaurant — estimated'),
 food('beanburrito','Bean burrito','Fast food',197,7.3,29.6,5.1,[['1 burrito, approximate',198]],'Taco Bell — estimated'),
 food('pizza','Cheese pizza, regular crust','Fast food',266,11.4,33.3,9.7,[['1 slice, approximate',107]],'Restaurant — estimated'),
 food('turkeysub','Turkey sub sandwich','Fast food',148,9.5,20.3,3.1,[['6-inch sub, approximate',219]],'Restaurant — estimated'),
 food('burritobowl','Chicken rice burrito bowl','Fast food',145,10,17,4.1,[['1 bowl, approximate',590]],'Restaurant — estimated'),
 food('latte','Caffè latte, 2% milk','Drinks',42,2.8,4.1,1.7,[['1 medium / 355 ml',355]],'Café — estimated'),
 food('croissant','Butter croissant','Fast food',406,8.2,45.8,21,[['1 medium',57]],'Bakery — estimated')
];

export const RECIPES = [
 {id:'chicken-bowl',title:'Lemon herb chicken bowl',description:'A bright, feel-good bowl with juicy chicken, fluffy quinoa and crisp greens.',image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85',cost:3.20,time:25,calories:510,protein:48,carbs:42,fat:17,category:'High protein',servings:1,ingredients:['120 g cooked chicken breast','150 g cooked quinoa','100 g steamed broccoli','50 g cherry tomatoes','10 g olive oil','Lemon juice, parsley, salt and pepper'],steps:['Cook quinoa according to package directions. Steam broccoli for 5 minutes.','Season and cook chicken in a nonstick pan until its center reaches 165°F / 74°C. Slice.','Arrange quinoa, broccoli, tomatoes and chicken in a bowl.','Whisk olive oil with lemon juice and parsley; drizzle over the bowl.']},
 {id:'overnight-oats',title:'Berry overnight oats',description:'Prep once, wake up to a creamy breakfast with oats, yogurt and juicy berries.',image:'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1000&q=85',cost:1.65,time:5,calories:420,protein:28,carbs:60,fat:8,category:'Breakfast',servings:1,ingredients:['45 g rolled oats','170 g nonfat Greek yogurt','80 ml 2% milk','75 g blueberries','8 g chia seeds','1 teaspoon honey'],steps:['Stir oats, yogurt, milk, chia and honey together in a jar.','Cover and refrigerate for at least 4 hours or overnight.','Top with blueberries before eating. Add a little water or milk to loosen if needed.']},
 {id:'lentil-curry',title:'Coconut lentil curry',description:'A warming one-pot staple that turns pantry basics into a satisfying dinner.',image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',cost:1.90,time:30,calories:495,protein:23,carbs:72,fat:13,category:'Plant based',servings:2,ingredients:['140 g dry red lentils','1 onion, diced','1 can diced tomatoes (400 g)','150 ml light coconut milk','100 g spinach','2 teaspoons curry powder','150 g cooked brown rice, divided'],steps:['Soften onion in a nonstick pot with a splash of water. Stir in curry powder.','Rinse lentils and add to the pot with tomatoes and 350 ml water.','Simmer for 20 minutes, stirring and adding water as needed, until tender.','Stir in coconut milk and spinach; heat through. Divide between two bowls with rice.']},
 {id:'egg-toast',title:'Avocado & egg toast',description:'Crisp whole-grain toast, creamy avocado, and eggs just the way you like them.',image:'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85',cost:2.10,time:10,calories:385,protein:21,carbs:33,fat:21,category:'Breakfast',servings:1,ingredients:['2 slices whole-wheat bread (56 g)','2 large eggs','60 g avocado','50 g cherry tomatoes','Lemon juice, black pepper and chili flakes'],steps:['Toast bread until crisp. Mash avocado with lemon juice and pepper.','Cook eggs to your preference; cook whites and yolks firm for food safety.','Spread avocado on toast, add eggs and tomatoes, and finish with chili flakes.']},
 {id:'tuna-wrap',title:'Crunchy tuna & chickpea wrap',description:'A no-fuss lunch with plenty of protein and a satisfying crunch.',image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=85',cost:2.45,time:10,calories:400,protein:39,carbs:45,fat:7,category:'Quick lunch',servings:1,ingredients:['1 whole-wheat tortilla (49 g)','100 g canned tuna, drained','60 g cooked chickpeas','35 g plain Greek yogurt','50 g cucumber, diced','Handful of spinach','Lemon juice and black pepper'],steps:['Mash chickpeas lightly. Combine with drained tuna, yogurt, cucumber, lemon and pepper.','Lay spinach on the tortilla and spoon the tuna mixture over it.','Fold in the sides, roll tightly, and slice in half.']},
 {id:'tofu-stirfry',title:'Peanut tofu stir-fry',description:'Golden tofu, colorful vegetables and an easy pantry peanut sauce.',image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',cost:2.70,time:20,calories:515,protein:30,carbs:48,fat:24,category:'Plant based',servings:1,ingredients:['150 g firm tofu, pressed and cubed','100 g cooked brown rice','150 g mixed broccoli and bell pepper','15 g peanut butter','1 teaspoon low-sodium soy sauce','1 teaspoon olive oil','Lime juice and water'],steps:['Mix peanut butter, soy sauce, lime and a splash of water into a sauce.','Heat oil in a pan and cook tofu for 6–8 minutes, turning until golden.','Add vegetables and stir-fry for 4–5 minutes until tender-crisp.','Toss with sauce and serve over warm brown rice.']},
 {id:'turkey-skillet',title:'Turkey & sweet potato skillet',description:'A hearty, colorful dinner that keeps the ingredient list and cleanup short.',image:'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?auto=format&fit=crop&w=1000&q=85',cost:3.10,time:25,calories:450,protein:30,carbs:43,fat:17,category:'High protein',servings:2,ingredients:['250 g ground turkey, 93% lean','350 g sweet potato, diced','1 bell pepper','1 onion','2 teaspoons olive oil','1 teaspoon smoked paprika','Parsley and black pepper'],steps:['Microwave diced sweet potato with a splash of water for 5 minutes.','Warm oil in a skillet and soften onion and bell pepper.','Add turkey and paprika. Break apart and cook to 165°F / 74°C.','Add sweet potato and cook until tender and lightly browned. Divide into two portions.']},
 {id:'bean-chili',title:'Three-bean pantry chili',description:'Budget-friendly comfort food packed with fiber, flavor and plant protein.',image:'https://images.unsplash.com/photo-1604908177225-f43e4f8902cf?auto=format&fit=crop&w=1000&q=85',cost:1.75,time:30,calories:430,protein:23,carbs:72,fat:7,category:'Budget friendly',servings:3,ingredients:['1 can black beans, drained (240 g)','1 can kidney beans, drained (240 g)','1 can chickpeas, drained (240 g)','1 can crushed tomatoes (400 g)','1 onion','1 bell pepper','1 tablespoon olive oil','2 teaspoons chili powder and 1 teaspoon cumin'],steps:['Heat oil in a pot. Soften diced onion and pepper for 5 minutes.','Add chili powder and cumin; stir for 30 seconds.','Add drained beans and tomatoes with 150 ml water.','Simmer for 20 minutes, stirring occasionally. Divide into three servings.']}
].map(r=>({...r,nutritionNote:'Estimated per serving; ingredient brands and portions vary.',costNote:'Approximate USD per serving; local prices vary.'}));

const ACTIVITY = {sedentary:1.2,light:1.375,moderate:1.55,active:1.725,very:1.9};
export function calculateTargets(profile={}) {
 const age=Number(profile.age),weight=Number(profile.weightKg??profile.weight),height=Number(profile.heightCm??profile.height);
 const sex=profile.sex??profile.sexAtBirth??'female';
 if(!Number.isFinite(age)||age<18||age>100) throw new Error('Macro estimates are available for adults ages 18–100.');
 if(!Number.isFinite(weight)||weight<35||weight>300) throw new Error('Enter a weight between 35 and 300 kg.');
 if(!Number.isFinite(height)||height<120||height>230) throw new Error('Enter a height between 120 and 230 cm.');
 if(!['male','female'].includes(sex)) throw new Error('Select a sex for this equation, or set your targets manually.');
 const activity=typeof profile.activity==='number'?profile.activity:(ACTIVITY[profile.activity]??1.55);
 if(!Number.isFinite(activity)||activity<1.2||activity>1.9) throw new Error('Select a valid activity level.');
 const bmr=10*weight+6.25*height-5*age+(sex==='male'?5:-161);
 const tdee=bmr*activity;
 const goal=profile.goal??'maintain';
 if(!['lose','gain','maintain'].includes(goal)) throw new Error('Choose lose, gain, or maintain.');
 const adjustment=goal==='lose'?-Math.min(350,tdee*.15):goal==='gain'?Math.min(250,tdee*.10):0;
 // A lower bound is a guardrail, not an assurance that a target is suitable.
 const lowerBound=sex==='male'?1500:1200;
 const calories=Math.round(Math.max(lowerBound,tdee+adjustment)/10)*10;
 const protein=Math.round(weight*1.8),fat=Math.round(weight*.8);
 if(protein*4+fat*9>=calories) throw new Error('These measurements need individualized macro guidance: the weight-based protein and fat estimates exceed this calorie target.');
 const carbs=Math.max(0,Math.round((calories-protein*4-fat*9)/4));
 return {calories,protein,carbs,fat,bmr:Math.round(bmr),tdee:Math.round(tdee),goal,activity,adjustment:Math.round(calories-tdee),method:'Mifflin–St Jeor estimate',note:'Starting estimate for generally healthy adults. Adjust using 2–4 weeks of trends. Not for pregnancy, breastfeeding, or eating-disorder recovery; seek individualized support.'};
}

const MOVEMENTS = [
 {name:'Chair squat',kind:'lower',avoid:['knee','back'],instructions:'Sit back toward a stable chair, then stand. Keep the movement comfortable and controlled.'},
 {name:'Incline push-up',kind:'upper',avoid:['wrist','shoulder','back'],instructions:'Use a secure wall or counter. Keep the body aligned and lower slowly.'},
 {name:'Glute bridge',kind:'lower',avoid:['back','knee'],instructions:'Lie on your back, feet planted. Gently raise your hips without arching the lower back.'},
 {name:'Bird dog',kind:'core',avoid:['wrist','shoulder','knee','back'],instructions:'From hands and knees, extend opposite arm and leg only as far as you can keep steady.'},
 {name:'Standing calf raise',kind:'lower',avoid:['knee','back'],instructions:'Hold a stable surface lightly. Rise onto your toes and lower with control.'},
 {name:'Standing march',kind:'cardio',avoid:['knee','back'],instructions:'March at a conversational pace with small, comfortable steps.'},
 {name:'Dead bug heel tap',kind:'core',avoid:['back'],instructions:'Lie on your back with knees bent. Slowly tap one heel down, keeping the trunk comfortable.'},
 {name:'Standing shoulder-blade squeeze',kind:'upper',avoid:['shoulder','back'],instructions:'Stand comfortably, arms relaxed. Gently draw shoulder blades together without shrugging.'},
 {name:'Seated alternating heel raise',kind:'lower',avoid:['knee','back'],instructions:'Sit upright in a stable chair. Lift and lower heels through a comfortable range.'},
 {name:'Seated gentle marching',kind:'cardio',avoid:['knee','back'],instructions:'Sit in a stable chair and alternate a small lift of each foot. Keep effort easy.'}
];
export function buildWorkout(profile={}) {
 const level=['beginner','intermediate','advanced'].includes(profile.experience)?profile.experience:'beginner';
 let limitations=profile.limitations??profile.injuries??[];
 limitations=Array.isArray(limitations)?limitations.map(x=>String(x).toLowerCase()):String(limitations).toLowerCase().split(/[,; ]+/).filter(Boolean);
 const recognized=['knee','back','wrist','shoulder'];
 const normalized=limitations.filter(x=>!['none','no',''].includes(x));
 const unknown=normalized.some(x=>!recognized.includes(x));
 const sets=level==='beginner'?2:level==='intermediate'?3:4;
 const reps=level==='beginner'?'8–10':level==='intermediate'?'10–12':'12–15';
 const allowed=MOVEMENTS.filter(x=>!x.avoid.some(a=>normalized.includes(a)));
 // An injury cannot be assessed automatically. These are exclusions to discuss
 // with a clinician, not a rehabilitation prescription or clearance to train.
 const requiresClearance=normalized.length>0;
 if(unknown||allowed.length<3) return {title:'Recovery & professional guidance',level,duration:0,daysPerWeek:0,exercises:[],limitations:normalized,requiresClearance:true,isRecovery:true,note:'Your movement limitations need individual assessment. Skip the automated workout and ask a qualified clinician which movements are appropriate. Rest is an available option.',schedule:['Rest / clinician-approved activity'],warmup:'No automatic warm-up prescribed.',progression:'Resume training only with a plan appropriate for your injury.'};
 const selected=allowed.slice(0,level==='beginner'?5:6).map(x=>({...x,sets,reps:x.kind==='cardio'?'45–60 seconds':x.name.includes('squeeze')?'8 gentle repetitions':reps,rest:level==='advanced'?45:60}));
 return {title:profile.goal==='lose'?'Full-body foundations':profile.goal==='gain'?'Bodyweight strength':'Everyday full-body strength',level,duration:level==='beginner'?20:level==='intermediate'?30:40,daysPerWeek:3,exercises:selected,limitations:normalized,requiresClearance,isRecovery:false,note:requiresClearance?'Movement exclusions applied. An injury cannot be evaluated automatically; confirm this routine with your clinician before starting. Stop any movement that hurts.':'Train at a comfortable effort, leave 2–3 repetitions in reserve, and stop if you feel pain, dizziness or unusual symptoms.',schedule:['Monday · Strength','Tuesday · Easy walk or rest','Wednesday · Strength','Thursday · Rest','Friday · Strength','Saturday · Easy walk or mobility','Sunday · Rest'],warmup:'3–5 minutes of comfortable easy movement and gentle practice repetitions.',progression:'When every set feels controlled for two sessions, add 1–2 repetitions. Then choose a slightly harder variation. Take at least one rest day between strength sessions.'};
}
