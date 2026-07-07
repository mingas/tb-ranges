(function(){var m=document.getElementById('tbrx-instrument');if(m){m.innerHTML=`<div class="wrap"><header class="hero">
    <div class="eyebrow">Bloodwork reference · Men</div>
    <h1>Testosterone levels by age:<br><em>normal</em> isn't the same as <em>optimal.</em></h1>
    <p class="lede">The standard lab range covers every man from 19 to 80. Set your age and your result to see the range that actually fits you — and the gap most doctors never mention.</p>
    <p class="byline">A reference companion to <em>The Testosterone Blueprint</em> · Chapter 2 · Published by The Testosterone Blueprint</p>
    <div class="trust">
      <span class="pill">Reference range: Endocrine Society</span>
      <span class="pill">ng/dL &amp; nmol/L</span>
      <span class="pill">Fully sourced</span>
      <span class="pill">Reviewed Jul 2026</span>
    </div>
  </header>

  <section class="panel" aria-label="Testosterone range instrument">
    <div class="tabs" role="tablist">
      <button class="tab" role="tab" id="tab-total" data-mk="total" aria-controls="panel-total" aria-selected="true">Total Testosterone</button>
      <button class="tab" role="tab" data-mk="free" aria-controls="panel-total" aria-selected="false">Free Testosterone</button>
      <button class="tab" role="tab" data-mk="shbg" aria-controls="panel-total" aria-selected="false">SHBG</button>
      <button class="tab" role="tab" data-mk="e2" aria-controls="panel-total" aria-selected="false">Oestradiol</button>
    </div>
    <div class="pbody" id="panel-total" role="tabpanel" aria-labelledby="tab-total">
      <div class="mhead">
        <div class="mname" id="mName">Total Testosterone</div>
        <div class="msub" id="mSub">Morning draw, fasted · adult men</div>
      </div>
      <div class="mnote" id="mNote" hidden></div>

      <div class="controls">
        <div class="ctl" id="ageCtl">
          <label for="age">Your age</label>
          <div class="age-row">
            <input type="range" id="age" min="19" max="80" value="45" step="1" aria-label="Your age">
            <div class="age-val"><span id="ageOut">45</span><small> yrs</small></div>
          </div>
        </div>
        <div class="ctl">
          <label for="val" id="valLabel">Your result</label>
          <div class="result-row">
            <input type="text" id="val" inputmode="decimal" value="480" aria-label="Your result">
            <span class="unit-tag" id="unitTag">ng/dL</span>
          </div>
        </div>
        <div class="ctl" id="unitCtl" style="grid-column:1/-1">
          <label>Units</label>
          <div class="seg" id="seg" role="group" aria-label="Units">
            <button id="u1" aria-pressed="true">ng/dL</button>
            <button id="u2" aria-pressed="false">nmol/L</button>
          </div>
        </div>
      </div>

      <div class="gauge">
        <div class="legend">
          <span class="lg"><i class="l-lab"></i> Reference range</span>
          <span class="lg"><i class="l-opt"></i> Optimal range</span>
          <span class="lg" id="lgLow"><i class="l-low"></i> "Low" threshold</span>
        </div>
        <div class="lane-shell">
          <div class="readout" id="readout">480<small>ng/dL</small></div>
          <div class="lane" id="lane">
            <div class="band band-lab" id="bandLab"></div>
            <div class="band band-opt" id="bandOpt"><span class="cap" id="optCap">Optimal · 40s</span></div>
            <div class="low-line" id="lowLine"><span class="lbl" id="lowLbl">264 · low</span></div>
            <div class="needle" id="needle"></div>
          </div>
          <div class="ticks" id="ticks"></div>
        </div>
      </div>

      <div class="ftcard" id="ftCard" hidden>
        <div class="k">Don't have your free testosterone?</div>
        <p>Free T is calculated from total testosterone, SHBG and albumin — not measured directly. Get yours in one step with our calculator, then type it above to see where it falls.</p>
        <a href="/free-testosterone-calculator">Open the Free Testosterone Calculator →</a>
      </div>

      <div class="verdict s-sub" id="verdict" role="status" aria-live="polite" aria-atomic="true">
        <div class="v-top">
          <span class="dot" id="vDot"></span>
          <span class="chip" id="vChip">In range · below optimal</span>
          <span class="v-h" id="vHead">A lab would call this normal.</span>
        </div>
        <div class="v-body" id="vBody"></div>
      </div>

      <div class="next">
        <a class="step" href="#book"><span class="k">The book · Ch 2</span><span class="t">Read your full blood panel</span></a>
        <a class="step" href="/free-testosterone-calculator"><span class="k">Go deeper</span><span class="t">Calculate free testosterone</span></a>
        <a class="step" href="/recommends/medichecks"><span class="k">Get tested</span><span class="t">Order a morning panel</span></a>
      </div>

      <p class="note"><b>How to read this.</b> The grey band is the standard lab range for your age; the gold band is the functional target where most men feel their best; the dashed line marks 264 ng/dL, below which the Endocrine Society considers testosterone low. Type your own result to place the needle.</p>
    </div>
  </section>

  <article>

    <section class="blk">
      <div class="kicker">The gap nobody mentions</div>
      <h2 class="h2">"Your levels are fine" — the four most misleading words in men's health</h2>
      <p>Most men who get their testosterone checked are handed a single number and told it's "normal." What they're rarely told is how wide that normal is. The standardised reference range spans healthy men from their late teens to old age, so a result can sit comfortably inside it and still be low <strong>for you, at your age</strong>.</p>
      <p>This is why a man in his forties can tick every box for low testosterone — flat energy, no drive, poor recovery, low mood — and be reassured that nothing is wrong. His total testosterone cleared the lab minimum. It just didn't clear the level his body actually runs well on.</p>
      <p>The tool above makes that visible. The <strong>optimal band is narrow, and it sits high inside the wide lab range</strong> — exactly where most "normal but not well" results fall short.</p>
    </section>

    <section class="blk">
      <div class="kicker">The numbers</div>
      <h2 class="h2">Testosterone levels by age</h2>
      <p>The internationally harmonised normal range for healthy men aged 19–39 is <strong>264–916 ng/dL (9.2–31.8 nmol/L)</strong>, established across US and European cohorts and adopted by the Endocrine Society.<sup class="cit"><a href="#sources">1</a></sup> Below 264 ng/dL is considered low. The functional optimal columns below are the targets used in <em>The Testosterone Blueprint</em><sup class="cit"><a href="#sources">7</a></sup> — the level most men in each decade feel best at, not an official reference range.</p>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Age</th><th>Standard lab range</th><th>Functional optimal</th><th>Note</th></tr></thead>
          <tbody>
            <tr><td>19–29</td><td class="lab">264–1,200</td><td class="opt">700–950</td><td>Peak years. Low readings here warrant investigation.</td></tr>
            <tr><td>30–39</td><td class="lab">264–1,100</td><td class="opt">600–850</td><td>The ~1%/year decline begins. Lifestyle shows most.</td></tr>
            <tr><td>40–49</td><td class="lab">264–1,000</td><td class="opt">500–750</td><td>Symptoms often appear. Free T matters more.</td></tr>
            <tr><td>50–59</td><td class="lab">264–950</td><td class="opt">400–650</td><td>SHBG rises. Always test free T alongside total.</td></tr>
            <tr><td>60+</td><td class="lab">264–900</td><td class="opt">350–550</td><td>"Normal" total can still be suboptimal for quality of life.</td></tr>
          </tbody>
        </table>
        <div class="tbl-cap">Values in ng/dL. Multiply by 0.0347 for nmol/L. Lab lower bound = harmonised "low" threshold (Endocrine Society); optimal ranges from <em>The Testosterone Blueprint</em>, Ch. 2. Interpret with a clinician.</div>
      </div>
    </section>

    <section class="blk">
      <div class="kicker">Why one number lies</div>
      <h2 class="h2">Total, free, and SHBG — the number that actually matters</h2>
      <p>Roughly 98% of your testosterone is bound to proteins — mostly SHBG (sex hormone-binding globulin) and albumin — and is biologically inactive. Only the remaining <strong>~2%, "free" testosterone</strong>, can enter cells and do its work on muscle, brain, drive and mood.<sup class="cit"><a href="#sources">6</a></sup></p>
      <p>That's the catch. When SHBG is high, a man can have a perfectly normal <em>total</em> testosterone while his <em>free</em> testosterone runs low — every symptom, a "normal" result. SHBG also rises with age,<sup class="cit"><a href="#sources">5</a></sup> which is why total testosterone alone tells you less the older you get. If your total sits below optimal, testing free T and SHBG is the logical next step.</p>
      <div class="callout">
        <div class="k">Free testosterone calculator</div>
        <h3>Have your total T, SHBG and albumin?</h3>
        <p>Free testosterone is best <em>calculated</em> from total T, SHBG and albumin using the validated Vermeulen equation — not measured directly, which is unreliable on most assays. Our calculator does it in one step.</p>
        <a href="/free-testosterone-calculator">Calculate free testosterone →</a>
      </div>
    </section>

    <section class="blk">
      <div class="kicker">Do it right</div>
      <h2 class="h2">How to test — so the number means something</h2>
      <p>Testosterone follows a daily rhythm: it peaks in the morning and falls through the day, so an afternoon reading can run <strong>20–25% lower</strong> than a morning one in younger men — an effect that shrinks with age.<sup class="cit"><a href="#sources">4</a></sup> Get the sample drawn between <strong>7am and 10am, after an overnight fast</strong>.</p>
      <p>And never act on a single result. Levels move with illness, sleep, alcohol and stress, so a low reading should always be confirmed with a repeat test before any conclusion<sup class="cit"><a href="#sources">3</a></sup> — and interpreted alongside your symptoms, free T and SHBG, not in isolation.</p>
    </section>

    <section class="blk faq">
      <div class="kicker">Common questions</div>
      <h2 class="h2">Testosterone by age: FAQ</h2>
      <details open><summary>What is a normal testosterone level by age?<span class="ic"></span></summary>
        <div class="a">The harmonised normal range for healthy men aged 19–39 is 264–916 ng/dL (9.2–31.8 nmol/L), from Travison et al. and adopted by the Endocrine Society. Below 264 ng/dL is considered low. Age-specific lab ranges vary slightly by laboratory and assay, which is why standardised ranges exist.</div>
      </details>
      <details><summary>What's the difference between "normal" and "optimal"?<span class="ic"></span></summary>
        <div class="a">Normal is the statistical lab range — where most men fall. Optimal is the narrower band where men tend to feel their best for their age. A result can sit inside the lab range yet be low for your age, which is why symptoms appear despite a "normal" result.</div>
      </details>
      <details><summary>Should I test free testosterone too?<span class="ic"></span></summary>
        <div class="a">Often, yes. Only about 2% of testosterone is free and active. A normal total can hide a low free testosterone when SHBG is high. Testing total, free and SHBG together gives the fuller picture — and free T is best calculated, not measured directly.</div>
      </details>
      <details><summary>When should testosterone be tested?<span class="ic"></span></summary>
        <div class="a">In the morning, ideally 7–10am, after an overnight fast, because levels peak early and drop through the day. Always confirm a low result with a repeat test, and interpret it alongside symptoms rather than in isolation.</div>
      </details>
    </section>

    <section class="blk" id="book">
      <div class="callout" style="background:linear-gradient(135deg,#12203a,#0c1626)">
        <div class="k">The complete guide · Chapter 2</div>
        <h3>Read your blood panel like a clinician.</h3>
        <p><em>The Testosterone Blueprint</em> shows you which markers to track, the optimal ranges by age, how to read total, free T and SHBG together, and the exact questions to ask your doctor.</p>
        <a href="/book">Get the book →</a>
      </div>
    </section>

    <section class="about">
      <div class="k">About these ranges</div>
      <p><b>Where the numbers come from.</b> The standard lab range is the internationally harmonised reference interval established by Travison et al. and adopted by the Endocrine Society — chosen because it is cross-calibrated to work across laboratories and countries, unlike assay-specific local ranges. The dashed "low" marker at 264 ng/dL is the Endocrine Society's threshold for low testosterone.</p>
      <p><b>What "optimal" means here.</b> The optimal bands are functional targets from <em>The Testosterone Blueprint</em> (Chapter 2) — the levels most men in each decade feel best at. They are <b>not</b> an official reference range, and we label them that way throughout. They are informed by the age-related decline and symptom patterns documented in the studies cited below.</p>
      <p><b>The other markers.</b> Free testosterone is calculated (Vermeulen method), not measured directly; SHBG and oestradiol follow standard adult-male reference intervals — SHBG ~10–57 nmol/L (age-adjusted), oestradiol ~10–40 pg/mL on a sensitive assay. All vary by laboratory and assay, so compare against the range printed on your own report.</p>
      <p><b>How we keep it honest.</b> Every physiological claim on this page is footnoted to a named source. Reference ranges vary by laboratory and assay, and a single result never tells the whole story — this page is educational and is not a diagnosis. We review the figures against current Endocrine Society and NHS guidance and update the "last reviewed" date accordingly.</p>
    </section>

    <section class="sources" id="sources">
      <div class="k">Sources</div>
      <ol>
        <li>Travison TG, Vesper HW, Orwoll E, Wu F, Kaufman JM, Wang Y, et al. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5460736/" target="_blank" rel="noopener">Harmonized Reference Ranges for Circulating Testosterone Levels in Men of Four Cohort Studies in the United States and Europe</a>. <em>J Clin Endocrinol Metab.</em> 2017;102(4):1161–1173.</li>
        <li>Endocrine Society. <a href="https://www.endocrine.org/news-and-advocacy/news-room/2017/landmark-study-defines-normal-ranges-for-testosterone-levels" target="_blank" rel="noopener">Landmark Study Defines Normal Ranges for Testosterone Levels</a>. 2017.</li>
        <li>Bhasin S, Brito JP, Cunningham GR, et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. <em>J Clin Endocrinol Metab.</em> 2018;103(5):1715–1744.</li>
        <li>Brambilla DJ, Matsumoto AM, Araujo AB, McKinlay JB. <a href="https://academic.oup.com/jcem/article/94/3/907/2596608" target="_blank" rel="noopener">Effect of Diurnal Variation on Clinical Measurement of Serum Testosterone and Other Sex Hormone Levels in Men</a>. <em>J Clin Endocrinol Metab.</em> 2009;94(3):907–913.</li>
        <li>Feldman HA, Longcope C, Derby CA, et al. <a href="https://pubmed.ncbi.nlm.nih.gov/11836290/" target="_blank" rel="noopener">Age Trends in the Level of Serum Testosterone and Other Hormones in Middle-Aged Men (Massachusetts Male Aging Study)</a>. <em>J Clin Endocrinol Metab.</em> 2002;87(2):589–598.</li>
        <li>Vermeulen A, Verdonck L, Kaufman JM. A Critical Evaluation of Simple Methods for the Estimation of Free Testosterone in Serum. <em>J Clin Endocrinol Metab.</em> 1999;84(10):3666–3672.</li>
        <li><em>The Testosterone Blueprint</em> (2026), Chapter 2: Reading Your Bloodwork (Table 1.3) — functional optimal ranges by age.</li>
      </ol>
      <div class="rev">Compiled, sourced and editorially reviewed by The Testosterone Blueprint · Last reviewed 6 July 2026</div>
    </section>

    <p class="disc"><b>Educational, not a diagnosis.</b> Standard ranges follow internationally harmonised reference intervals; optimal ranges reflect functional targets from <em>The Testosterone Blueprint</em> and are not official reference values. Levels vary by laboratory and assay. Always interpret results with a qualified clinician, especially before any treatment.</p>

  </article>
</div></div>`;}})();
(function(){
  // ---- Marker configuration. Each marker's values are stored in its BASE unit (units[0]). ----
  // Sources: Total T reference — Travison 2017 / Endocrine Society; optimal — The Testosterone Blueprint.
  // SHBG — 10-57 nmol/L (age-specific <50:16-57, 50+:20-82). Oestradiol (men) — 10-40 pg/mL. Free T — calculated (Vermeulen).
  var MK={
    total:{
      name:'Total Testosterone', sub:'Morning draw, fasted \u00b7 adult men',
      note:'Reference: Endocrine Society \u00b7 optimal: The Blueprint',
      units:[['ng/dL',1,0],['nmol/L',0.03467,1]],
      scale:[200,1250], step:100, low:264, useAge:true,
      ageBands:[[29,[264,1200],[700,950],'19\u201329'],[39,[264,1100],[600,850],'30s'],[49,[264,1000],[500,750],'40s'],[59,[264,950],[400,650],'50s'],[999,[264,900],[350,550],'60+']],
      def:480,
      copy:{
        optimal:['Optimal for your age','This is the sweet spot.','Your result sits in the functional range for your age \u2014 where most men report steady energy, drive, recovery and mood.'],
        sub:['In range \u00b7 below optimal','A lab would call this normal.','It clears the lab minimum, but for your age it sits low in the range \u2014 the zone where many men feel flat despite a \u201cnormal\u201d result. Worth testing free T and SHBG.'],
        above:['Above optimal \u00b7 in range','Higher than the target.','Above the functional optimal but within lab limits. Usually fine \u2014 worth a look if you are on any form of therapy.'],
        low:['Below the \u201clow\u201d threshold','Under the low threshold.','Below the Endocrine Society threshold for low testosterone. Take symptoms and a repeat morning test to a doctor.'],
        high:['Above the lab range','Over the standard ceiling.','Above the usual upper limit for your age. If you are not on therapy, confirm with a repeat morning test.']
      }
    },
    free:{
      name:'Free Testosterone', sub:'Calculated (Vermeulen) \u00b7 adult men',
      note:'Calculated from total T, SHBG & albumin \u2014 not measured directly',
      units:[['ng/dL',1,0],['pmol/L',34.67,0]],
      scale:[0,35], step:5, useAge:false, calc:true,
      ref:[9,30], opt:[15,30], def:12,
      copy:{
        optimal:['Optimal free testosterone','The active fraction looks healthy.','This is the testosterone that actually reaches your tissues \u2014 a good sign your usable level matches your total.'],
        sub:['Low-normal free T','Often the real story.','Your total may look fine, but the free, active fraction is low \u2014 the classic picture when SHBG is high, and often what is behind \u201cnormal but not well\u201d.'],
        above:['High free T','Above the usual range.','Common on testosterone therapy; worth confirming the clinical context.'],
        low:['Low free testosterone','Below the calculated range.','With symptoms, this is a more meaningful number than total T. Discuss with a clinician.'],
        high:['High free testosterone','Above the reference.','Confirm with your clinician, particularly if you are not on therapy.']
      }
    },
    shbg:{
      name:'SHBG', sub:'Sex hormone-binding globulin \u00b7 adult men',
      note:'Rises with age \u00b7 read alongside total and free T',
      units:[['nmol/L',1,0]],
      scale:[0,120], step:20, useAge:true,
      ageBands:[[49,[16,57],[20,45],'under 50'],[999,[20,82],[25,55],'50+']],
      def:55,
      copy:{
        optimal:['Balanced SHBG','A healthy carrier level.','Mid-range SHBG leaves a good share of your testosterone free and usable.'],
        sub:['Low-side SHBG','Check the metabolic side.','Lower SHBG raises free testosterone, but is often linked to insulin resistance, excess weight or fatty liver \u2014 worth a metabolic look.'],
        above:['High-side SHBG','Binds more testosterone.','Higher SHBG locks up more testosterone, lowering the free, active fraction \u2014 so total T can read \u201cnormal\u201d while you feel low. Common with age.'],
        low:['Very low SHBG','Below the reference range.','Usually points to metabolic factors \u2014 insulin resistance or obesity. Worth investigating.'],
        high:['High SHBG','Above the reference range.','This locks up more testosterone; free T is the number to check here. Can rise with age, thyroid or liver factors.']
      }
    },
    e2:{
      name:'Oestradiol', sub:'Sensitive/LC-MS assay \u00b7 adult men',
      note:'Needs a sensitive/LC-MS assay \u2014 standard assays misread male levels',
      units:[['pg/mL',1,0],['pmol/L',3.671,0]],
      scale:[0,60], step:10, low:10, useAge:false,
      ref:[10,40], opt:[20,30], def:18,
      copy:{
        optimal:['Optimal oestradiol','Men need oestrogen too.','Oestradiol in the sweet spot supports bone density, libido, mood and heart health.'],
        sub:['Low-normal oestradiol','On the low side.','Very low E2 in men is linked to bone loss, joint pain and low libido \u2014 it is not \u201cbetter\u201d to be low.'],
        above:['High-normal oestradiol','Upper end of normal.','Usually fine; if you are on TRT or carrying excess weight, aromatase can push it higher.'],
        low:['Low oestradiol','Below 10 pg/mL.','Associated with bone loss and vasomotor symptoms in men, and often tracks with low testosterone.'],
        high:['High oestradiol','Above the male range.','Common with higher body fat or TRT. Discuss aromatase and next steps with your clinician.']
      }
    }
  };
  var ORDER=['total','free','shbg','e2'];

  var st={mk:'total', ui:0, age:45, val:{}};
  ORDER.forEach(function(k){st.val[k]=MK[k].def;});

  function $(id){return document.getElementById(id);}
  var bandLab=$('bandLab'), bandOpt=$('bandOpt'), optCap=$('optCap'),
      lowLine=$('lowLine'), lowLbl=$('lowLbl'), lgLow=$('lgLow'), needle=$('needle'),
      readout=$('readout'), ticks=$('ticks'), verdict=$('verdict'), vChip=$('vChip'),
      vHead=$('vHead'), vBody=$('vBody'), mName=$('mName'), mSub=$('mSub'), mNote=$('mNote'),
      ftCard=$('ftCard'), ageCtl=$('ageCtl'), unitCtl=$('unitCtl'),
      u1=$('u1'), u2=$('u2'), age=$('age'), ageOut=$('ageOut'), val=$('val'), unitTag=$('unitTag');

  function C(){return MK[st.mk];}
  function U(){return C().units[st.ui];}          // [label, multiplier base->unit]
  function base(){return st.val[st.mk];}          // stored in base unit
  function clamp(x,a,b){return Math.max(a,Math.min(b,x));}
  function pos(v){var s=C().scale;return clamp((v-s[0])/(s[1]-s[0])*100,0,100);}
  function disp(v){return (v*U()[1]).toFixed(U()[2]);}

  function bands(){
    var c=C(),b,i;
    if(c.useAge){b=c.ageBands;for(i=0;i<b.length;i++){if(st.age<=b[i][0])return {ref:b[i][1],opt:b[i][2],lbl:b[i][3]};}
      return {ref:b[b.length-1][1],opt:b[b.length-1][2],lbl:b[b.length-1][3]};}
    return {ref:c.ref,opt:c.opt,lbl:null};
  }
  function classify(v,B){
    if(v<B.ref[0])return 'low';
    if(v>B.ref[1])return 'high';
    if(v>=B.opt[0]&&v<=B.opt[1])return 'optimal';
    if(v<B.opt[0])return 'sub';
    return 'above';
  }
  function buildTicks(){
    var s=C().scale, step=C().step, h='', v;
    for(v=s[0];v<=s[1];v+=step){var big=(((v-s[0])/step)%2===0);
      h+='<div class="tick" style="left:'+pos(v)+'%"><i></i>'+(big?'<span>'+disp(v)+'</span>':'')+'</div>';}
    ticks.innerHTML=h;
  }

  function selectMarker(k){
    st.mk=k; st.ui=0;
    ORDER.forEach(function(m){var t=document.querySelector('.tab[data-mk="'+m+'"]');if(t)t.setAttribute('aria-selected',m===k);});
    var c=C();
    mName.textContent=c.name; mSub.textContent=c.sub;
    if(c.note){mNote.textContent=c.note; mNote.hidden=false;} else {mNote.hidden=true;}
    u1.textContent=c.units[0][0]; u1.setAttribute('aria-pressed','true');
    if(c.units[1]){u2.textContent=c.units[1][0]; u2.setAttribute('aria-pressed','false'); unitCtl.hidden=false;}
    else {unitCtl.hidden=true;}
    unitTag.textContent=c.units[0][0];
    ageCtl.hidden=!c.useAge;
    var showLow=(typeof c.low==='number');
    lowLine.style.display=showLow?'':'none'; if(lgLow)lgLow.style.display=showLow?'':'none';
    ftCard.hidden=!c.calc;
    val.value=disp(base());
    buildTicks(); render();
  }

  function render(){
    var c=C(), B=bands(), p, cls;
    if(c.useAge)ageOut.textContent=st.age;
    bandLab.style.left=pos(B.ref[0])+'%'; bandLab.style.width=(pos(B.ref[1])-pos(B.ref[0]))+'%';
    bandOpt.style.left=pos(B.opt[0])+'%'; bandOpt.style.width=(pos(B.opt[1])-pos(B.opt[0]))+'%';
    optCap.textContent=B.lbl?('Optimal \u00b7 '+B.lbl):'Optimal';
    if(typeof c.low==='number'){lowLine.style.left=pos(c.low)+'%'; if(lowLbl)lowLbl.textContent=disp(c.low)+' \u00b7 low';}
    p=pos(base()); needle.style.left=p+'%'; readout.style.left=p+'%';
    readout.innerHTML=disp(base())+'<small>'+U()[0]+'</small>';
    cls=classify(base(),B);
    verdict.className='verdict s-'+cls;
    var s=c.copy[cls]; vChip.textContent=s[0]; vHead.textContent=s[1]; vBody.textContent=s[2];
  }

  function setUnit(i){
    if(i===st.ui||!C().units[i])return; st.ui=i;
    u1.setAttribute('aria-pressed',i===0); u2.setAttribute('aria-pressed',i===1);
    unitTag.textContent=U()[0]; val.value=disp(base());
    buildTicks(); render();
  }

  ORDER.forEach(function(m){var t=document.querySelector('.tab[data-mk="'+m+'"]');
    if(t)t.addEventListener('click',function(){selectMarker(m);});});
  age.addEventListener('input',function(){st.age=+age.value; if(C().useAge)render();});
  val.addEventListener('input',function(){var r=parseFloat(val.value.replace(',','.'));if(isNaN(r))return;
    st.val[st.mk]=clamp(r/U()[1],0,C().scale[1]*1.6); render();});
  val.addEventListener('blur',function(){val.value=disp(base());});
  u1.addEventListener('click',function(){setUnit(0);});
  u2.addEventListener('click',function(){setUnit(1);});

  selectMarker('total');
})();
