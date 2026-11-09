(function(){var m=document.getElementById('tbrx-instrument');if(m){m.innerHTML=`<div class="wrap"><header class="hero">
    <div class="eyebrow">Bloodwork reference · Men</div>
    <h1>Testosterone levels by age:<br><em>normal</em> isn't the same as <em>optimal.</em></h1>
    <p class="lede">The standard lab range is one wide band for all adult men. Set your age and your result to see where you sit in it, and against the age-specific optimal targets used in <em>The Testosterone Blueprint</em>.</p>
    <p class="byline">A reference companion to <em>The Testosterone Blueprint</em> · Chapter 2 · Published by The Testosterone Blueprint</p>
    <div class="trust">
      <span class="pill">Reference range: Endocrine Society</span>
      <span class="pill">ng/dL &amp; nmol/L</span>
      <span class="pill">Fully sourced</span>
      <span class="pill">Reviewed Nov 2026</span>
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
            <button id="u3" aria-pressed="false" hidden>pmol/L</button>
          </div>
          <div class="tbrx-hint" id="uHint" role="note" hidden></div>
        </div>
      </div>

      <div class="gauge">
        <div class="legend">
          <span class="lg"><i class="l-lab"></i> Reference range</span>
          <span class="lg"><i class="l-opt"></i> Optimal target (Blueprint)</span>
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
        <p>Free T is usually calculated from total testosterone, SHBG and albumin. Equilibrium dialysis is the reference method for measuring it; the direct "analog" tests some labs use are unreliable. Get a calculated value in one step with our calculator, then type it above to see where it falls.</p>
        <a href="/testosterone-test">Open the Free Testosterone Calculator →</a>
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
        <a class="step" href="/testosterone-test"><span class="k">Go deeper</span><span class="t">Calculate free testosterone</span></a>
        <a class="step" href="/testosterone-blood-test#where-to-test"><span class="k">Get tested</span><span class="t">Order a morning panel</span></a>
      </div>

      <p class="note"><b>How to read this.</b> The grey band is the standard lab range for your age; the gold band is the optimal target used in <em>The Testosterone Blueprint</em>, which is a guide, not an official range; the dashed line marks the "low" threshold. Type your own result to place the needle.</p>
    </div>
  </section>

  <article>

    <section class="blk">
      <div class="kicker">The gap nobody mentions</div>
      <h2 class="h2">"Your levels are fine" — the four most misleading words in men's health</h2>
      <p>Most men who get their testosterone checked are handed a single number and told it's "normal." What they're rarely told is how wide that normal is. The standardised reference range spans healthy men from their late teens to old age, so a result can sit comfortably inside it and still be low <strong>for your age group</strong>.</p>
      <p>This is why a man in his forties can tick every box for low testosterone — flat energy, no drive, poor recovery, low mood — and be reassured that nothing is wrong. His total testosterone cleared the lab minimum. Whether that level is right for him depends on his symptoms, a repeat morning test and his free testosterone, not on one number.</p>
      <p>The tool above shows your result against both the wide lab range and the <strong>narrower optimal target for your age</strong>. The target is a guide, not a diagnosis: many men below it feel well, and treatment decisions rest on symptoms plus consistently low results.</p>
    </section>

    <section class="blk">
      <div class="kicker">The numbers</div>
      <h2 class="h2">Testosterone levels by age</h2>
      <p>The internationally harmonised normal range for healthy men aged 19–39 is <strong>264–916 ng/dL (9.2–31.8 nmol/L)</strong>, established across US and European cohorts and adopted by the Endocrine Society.<sup class="cit"><a href="#sources">1</a></sup> Below 264 ng/dL is considered low. The functional optimal column below shows the targets used in <em>The Testosterone Blueprint</em><sup class="cit"><a href="#sources">7</a></sup> for each decade. They are a guide, not an official reference range.</p>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Age</th><th>Standard lab range</th><th>Functional optimal</th><th>Note</th></tr></thead>
          <tbody>
            <tr><td data-l="Age">19–29</td><td class="lab" data-l="Standard lab range">264–916</td><td class="opt" data-l="Functional optimal">700–916</td><td data-l="Note">Peak years. Low readings here warrant investigation.</td></tr>
            <tr><td data-l="Age">30–39</td><td class="lab" data-l="Standard lab range">264–916</td><td class="opt" data-l="Functional optimal">600–850</td><td data-l="Note">The ~1%/year decline begins. Lifestyle shows most.</td></tr>
            <tr><td data-l="Age">40–49</td><td class="lab" data-l="Standard lab range">264–916</td><td class="opt" data-l="Functional optimal">500–750</td><td data-l="Note">Symptoms often appear. Free T matters more.</td></tr>
            <tr><td data-l="Age">50–59</td><td class="lab" data-l="Standard lab range">264–916</td><td class="opt" data-l="Functional optimal">400–650</td><td data-l="Note">SHBG rises. Always test free T alongside total.</td></tr>
            <tr><td data-l="Age">60+</td><td class="lab" data-l="Standard lab range">264–916</td><td class="opt" data-l="Functional optimal">350–550</td><td data-l="Note">"Normal" total can still be suboptimal for quality of life.</td></tr>
          </tbody>
        </table>
        <div class="tbl-cap">Values in ng/dL. Multiply by 0.0347 for nmol/L. Lab range = harmonised reference interval (Travison et al.), defined in healthy non-obese men aged 19 to 39; there is no harmonised range for older men, so the same range is shown at every age. Optimal targets from <em>The Testosterone Blueprint</em>, Ch. 2. Interpret with a clinician.</div>
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
        <p>Free testosterone is usually <em>calculated</em> from total T, SHBG and albumin using the validated Vermeulen equation. Equilibrium dialysis is the reference method; the direct "analog" tests some labs use are unreliable. Our calculator does the calculation in one step.</p>
        <a href="/testosterone-test">Calculate free testosterone →</a>
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
      <p><b>What "optimal" means here.</b> The optimal bands are functional targets from <em>The Testosterone Blueprint</em> (Chapter 2) for each decade. They are <b>not</b> an official reference range, and we label them that way throughout. They are informed by the age-related decline and symptom patterns documented in the studies cited below.</p>
      <p><b>The other markers.</b> Free testosterone is usually calculated (Vermeulen method); its normal range varies widely between methods and laboratories, so the tool flags only results below about 7 ng/dL (around 245 pmol/L), a cut-off some NHS services use. SHBG uses typical adult-male intervals of about 16–57 nmol/L under 50 and 20–82 nmol/L from 50. Oestradiol uses about 10–40 pg/mL on a sensitive assay, with no age-specific target, as none is established. All vary by laboratory and assay, so compare against the range printed on your own report.</p>
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
      <div class="rev">Compiled, sourced and editorially reviewed by The Testosterone Blueprint · Last reviewed 9 November 2026</div>
    </section>

    <p class="disc"><b>Educational, not a diagnosis.</b> Standard ranges follow internationally harmonised reference intervals; optimal ranges reflect functional targets from <em>The Testosterone Blueprint</em> and are not official reference values. Levels vary by laboratory and assay. Always interpret results with a qualified clinician, especially before any treatment.</p>

  </article>
</div></div>`;}})();
(function(){
  // ---- Marker configuration. Values stored in BASE unit (units[0]). units: [label, multiplier base->unit, decimals]
  // Total T reference: Travison 2017 harmonised 264-916 ng/dL (19-39, applied at all ages; no harmonised range for older men).
  // Optimal targets: The Testosterone Blueprint, Ch. 2 (not official). Free T low cut-off ~7 ng/dL (~245 pmol/L, NHS Lothian CFT).
  // SHBG <50:16-57, 50+:20-82 nmol/L. Oestradiol (men, sensitive assay) 10-40 pg/mL, no age-specific target.
  var MK={
    total:{
      name:'Total Testosterone', sub:'Morning draw, fasted · adult men',
      note:'Reference: Travison 2017 / Endocrine Society · optimal target: The Blueprint',
      units:[['ng/dL',1,0],['nmol/L',0.03467,1]],
      hint:[[0,function(v){return v>0&&v<=50;},'This looks like a nmol/L value. UK and European labs usually report nmol/L; switch units above if so.'],
            [1,function(v){return v>=100;},'This looks like a ng/dL value. US labs usually report ng/dL; switch units above if so.']],
      scale:[200,1250], step:100, low:264, useAge:true, neutral:true,
      ageBands:[[29,[264,916],[700,916],'19–29'],[39,[264,916],[600,850],'30s'],[49,[264,916],[500,750],'40s'],[59,[264,916],[400,650],'50s'],[999,[264,916],[350,550],'60+']],
      def:480,
      copy:{
        optimal:['Within the optimal target','Inside the Blueprint target for your age.','Your result sits in the optimal target band The Testosterone Blueprint uses for your age group. Symptoms still matter more than any single number.'],
        sub:['Normal · below optimal target','Within the normal range.','This is inside the normal lab range. It sits below the Blueprint optimal target for your age, which is a guide, not an official range, and is not a problem on its own. If you also have symptoms such as low energy, low libido or poor recovery, a repeat morning test with free T and SHBG is a sensible next step.'],
        above:['Normal · above optimal target','Within the normal range.','Above the Blueprint optimal target for your age but within the normal lab range. Usually fine; worth a look if you are on any form of therapy.'],
        low:['Below the “low” threshold','Under the low threshold.','Below 264 ng/dL (9.2 nmol/L), the threshold for low testosterone used by the Endocrine Society. A diagnosis needs symptoms and a repeat low morning result, so take both to a doctor.'],
        high:['Above the normal range','Over the harmonised upper limit.','Above 916 ng/dL (31.8 nmol/L), the upper limit of the harmonised range. If you are not on therapy, confirm with a repeat morning test.']
      }
    },
    free:{
      name:'Free Testosterone', sub:'Usually calculated (Vermeulen) · adult men',
      note:'Ranges vary by method and lab · compare with your own report',
      units:[['ng/dL',1,1],['pg/mL',10,0],['pmol/L',34.67,0]],
      hint:[[0,function(v){return v>60;},'This looks like a pg/mL or pmol/L value. Choose the unit printed on your report.'],
            [2,function(v){return v>0&&v<40;},'This looks like a ng/dL value. Choose the unit printed on your report.']],
      scale:[0,35], step:5, low:7, useAge:true, calc:true, neutral:true,
      ageBands:[[29,[7,30],[18,30],'19–29'],[39,[7,30],[16,28],'30s'],[49,[7,30],[14,26],'40s'],[59,[7,30],[12,23],'50s'],[999,[7,30],[11,21],'60+']], def:12,
      copy:{
        optimal:['Within the optimal target','Inside the Blueprint target for your age.','Your free, active testosterone sits in the optimal target band The Testosterone Blueprint uses for your age group.'],
        sub:['Normal · below optimal target','Within the normal range.','This is not low. It sits below the Blueprint optimal target for your age, which is a guide, not an official range. Free T results vary a lot between methods and labs, so compare with the range on your report, and if you have symptoms, discuss it alongside total T and SHBG.'],
        above:['Normal · above optimal target','Within the normal range.','Above the Blueprint optimal target for your age. Common on testosterone therapy; worth confirming the clinical context.'],
        low:['Low free testosterone','Below the usual cut-off.','Under about 7 ng/dL (around 245 pmol/L), a cut-off some NHS services use for low calculated free T. With symptoms, discuss it with a clinician alongside total T and SHBG.'],
        high:['High free testosterone','Above the usual range.','Confirm with your clinician, particularly if you are not on therapy.']
      }
    },
    shbg:{
      name:'SHBG', sub:'Sex hormone-binding globulin · adult men',
      note:'Rises with age · read alongside total and free T',
      units:[['nmol/L',1,0]],
      scale:[0,120], step:20, useAge:true,
      ageBands:[[49,[16,57],[20,45],'under 50'],[999,[20,82],[25,55],'50+']],
      def:55,
      copy:{
        optimal:['Balanced SHBG','A healthy carrier level.','Mid-range SHBG leaves a good share of your testosterone free and usable.'],
        sub:['Low-side SHBG','Check the metabolic side.','Lower SHBG raises free testosterone, but is often linked to insulin resistance, excess weight or fatty liver — worth a metabolic look.'],
        above:['High-side SHBG','Binds more testosterone.','Higher SHBG locks up more testosterone, lowering the free, active fraction — so total T can read “normal” while you feel low. Common with age.'],
        low:['Very low SHBG','Below the reference range.','Usually points to metabolic factors — insulin resistance or obesity. Worth investigating.'],
        high:['High SHBG','Above the reference range.','This locks up more testosterone; free T is the number to check here. Can rise with age, thyroid or liver factors.']
      }
    },
    e2:{
      name:'Oestradiol', sub:'Sensitive/LC-MS assay · adult men',
      note:'Needs a sensitive/LC-MS assay — standard assays misread male levels',
      units:[['pg/mL',1,0],['pmol/L',3.671,0]],
      scale:[0,60], step:10, low:10, useAge:false, ref:[10,40], opt:null, def:25,
      copy:{
        optimal:['Within the male range','In the usual range.','Within the usual adult male range on a sensitive assay. Men need some oestrogen for bone, libido and mood. Ranges vary by lab, so compare with the range on your own report.'],
        low:['Low oestradiol','Below 10 pg/mL.','Very low oestradiol in men is associated with bone loss and often tracks with low testosterone. Discuss it with your clinician.'],
        high:['High oestradiol','Above the male range.','Common with higher body fat or TRT. Discuss aromatase and next steps with your clinician.']
      }
    }
  };
  var ORDER=['total','free','shbg','e2'];

  var st={mk:'total', ui:0, age:45, val:{}, bad:false};
  ORDER.forEach(function(k){st.val[k]=MK[k].def;});

  function $(id){return document.getElementById(id);}
  var bandLab=$('bandLab'), bandOpt=$('bandOpt'), optCap=$('optCap'),
      lowLine=$('lowLine'), lowLbl=$('lowLbl'), lgLow=$('lgLow'), needle=$('needle'),
      readout=$('readout'), ticks=$('ticks'), verdict=$('verdict'), vChip=$('vChip'),
      vHead=$('vHead'), vBody=$('vBody'), mName=$('mName'), mSub=$('mSub'), mNote=$('mNote'),
      ftCard=$('ftCard'), ageCtl=$('ageCtl'), unitCtl=$('unitCtl'), uHint=$('uHint'),
      ub=[$('u1'),$('u2'),$('u3')], age=$('age'), ageOut=$('ageOut'), val=$('val'), unitTag=$('unitTag');
  var lgOpt=document.querySelector('#tbrx-instrument .l-opt');lgOpt=lgOpt?lgOpt.parentNode:null;

  // Scoped styles for the neutral verdict, hint and input notice (no change to ranges.css needed).
  var css=document.createElement('style');
  css.textContent='#tbrx-instrument .s-norm .chip{background:#e8edf4;color:#2b3a52}#tbrx-instrument .s-norm .dot{background:#7f8da3}'+
    '#tbrx-instrument .s-none .chip{background:#e8edf4;color:#2b3a52}#tbrx-instrument .s-none .dot{background:#b7c0cd}'+
    '#tbrx-instrument .tbrx-hint{margin-top:10px;font-size:13px;line-height:1.45;color:#8a5a00;background:#fff4dc;border:1px solid #f0d9a6;border-radius:9px;padding:8px 11px;white-space:normal;overflow-wrap:break-word;max-width:100%;box-sizing:border-box}'+
    '#tbrx-instrument .tbrx-hint[hidden]{display:none}#tbrx-instrument .seg button[hidden]{display:none}';
  document.head.appendChild(css);

  function C(){return MK[st.mk];}
  function U(){return C().units[st.ui];}
  function base(){return st.val[st.mk];}
  function clamp(x,a,b){return Math.max(a,Math.min(b,x));}
  function pos(v){var s=C().scale;return clamp((v-s[0])/(s[1]-s[0])*100,0,100);}
  function disp(v){return (v*U()[1]).toFixed(U()[2]);}
  function fmt(v,u){return (v*u[1]).toFixed(u[2]);}
  // Value as shown on screen, converted back to base, so the verdict always matches the number displayed.
  function shown(){var u=U();return (+(base()*u[1]).toFixed(u[2]))/u[1];}

  // Accepts "1,050" / "1 050" (thousands) and "15,5" (decimal comma). Rejects "<92", text, negatives.
  function parseNum(raw){
    var s=String(raw).trim().replace(/ /g,' ');
    if(s==='')return null;
    if(/^\d{1,3}([ ,]\d{3})+(\.\d+)?$/.test(s))s=s.replace(/[ ,]/g,'');
    else if(/^\d+,\d+$/.test(s))s=s.replace(',','.');
    if(!/^\d+(\.\d+)?$/.test(s)&&!/^\.\d+$/.test(s))return NaN;
    return parseFloat(s);
  }

  function bands(){
    var c=C(),b,i;
    if(c.useAge){b=c.ageBands;for(i=0;i<b.length;i++){if(st.age<=b[i][0])return {ref:b[i][1],opt:b[i][2],lbl:b[i][3]};}
      return {ref:b[b.length-1][1],opt:b[b.length-1][2],lbl:b[b.length-1][3]};}
    return {ref:c.ref,opt:c.opt,lbl:null};
  }
  function classify(v,B){
    if(v<B.ref[0])return 'low';
    if(v>B.ref[1])return 'high';
    if(!B.opt)return 'optimal';
    if(v>=B.opt[0]&&v<=B.opt[1])return 'optimal';
    if(v<B.opt[0])return 'sub';
    return 'above';
  }
  function buildTicks(){
    var s=C().scale, step=C().step, h='', v;
    for(v=s[0];v<=s[1];v+=step){var big=(((v-s[0])/step)%2===0)&&!(typeof C().low==='number'&&Math.abs(v-C().low)<step*1.5);
      h+='<div class="tick" style="left:'+pos(v)+'%"><i></i>'+(big?'<span>'+disp(v)+'</span>':'')+'</div>';}
    ticks.innerHTML=h;
  }
  function updateHint(){
    var c=C(),h=c.hint||[],msg='',i,uv=base()*U()[1];
    if(!st.bad)for(i=0;i<h.length;i++){if(h[i][0]===st.ui&&h[i][1](uv)){msg=h[i][2];break;}}
    uHint.textContent=msg; uHint.hidden=!msg;
  }
  function setUnitButtons(){
    var c=C();
    ub.forEach(function(b,i){if(!b)return;var u=c.units[i];
      if(u){b.textContent=u[0];b.hidden=false;b.setAttribute('aria-pressed',i===st.ui?'true':'false');}
      else{b.hidden=true;b.setAttribute('aria-pressed','false');}});
    unitCtl.style.display=c.units.length>1?'':'none';
    unitTag.textContent=U()[0];
  }

  function selectMarker(k){
    st.mk=k; st.ui=0; st.bad=false;
    ORDER.forEach(function(m){var t=document.querySelector('.tab[data-mk="'+m+'"]');if(t)t.setAttribute('aria-selected',m===k);});
    var c=C();
    mName.textContent=c.name; mSub.textContent=c.sub;
    if(c.note){mNote.textContent=c.note; mNote.hidden=false;} else {mNote.hidden=true;}
    setUnitButtons();
    ageCtl.style.display=c.useAge?'':'none';
    var showLow=(typeof c.low==='number');
    lowLine.style.display=showLow?'':'none'; if(lgLow)lgLow.style.display=showLow?'':'none';
    ftCard.style.display=c.calc?'':'none';
    val.value=disp(base());
    buildTicks(); render();
  }

  function render(){
    var c=C(), B=bands(), p, cls, v;
    if(c.useAge)ageOut.textContent=st.age;
    bandLab.style.left=pos(B.ref[0])+'%'; bandLab.style.width=(pos(B.ref[1])-pos(B.ref[0]))+'%';
    if(B.opt){bandOpt.style.display='';bandOpt.style.left=pos(B.opt[0])+'%'; bandOpt.style.width=(pos(B.opt[1])-pos(B.opt[0]))+'%';}
    else bandOpt.style.display='none';
    if(lgOpt)lgOpt.style.display=B.opt?'':'none';
    optCap.textContent=B.lbl?('Optimal · '+B.lbl):'Optimal';
    if(typeof c.low==='number'){lowLine.style.left=pos(c.low)+'%'; if(lowLbl)lowLbl.textContent=disp(c.low)+' · low';}
    updateHint();
    if(st.bad){
      needle.style.display='none'; readout.style.display='none';
      verdict.className='verdict s-none';
      vChip.textContent='Number needed';
      vHead.textContent='Enter your result as a number.';
      vBody.textContent='Type the number only, for example 15.5. A result shown as "<" or ">" a value is outside what the lab measured precisely, so the tool cannot place it; ask your clinician how to read it.';
      return;
    }
    needle.style.display=''; readout.style.display='';
    v=shown();
    p=pos(v); needle.style.left=p+'%'; readout.style.left=p+'%';
    readout.innerHTML=disp(base())+'<small>'+U()[0]+'</small>';
    cls=classify(v,B);
    verdict.className='verdict s-'+((c.neutral&&(cls==='sub'||cls==='above'))?'norm':cls);
    var s=c.copy[cls]; vChip.textContent=s[0]; vHead.textContent=s[1]; vBody.textContent=s[2];
  }

  function setUnit(i){
    if(i===st.ui||!C().units[i])return; st.ui=i;
    setUnitButtons();
    if(!st.bad)val.value=disp(base());
    buildTicks(); render();
  }

  ORDER.forEach(function(m){var t=document.querySelector('.tab[data-mk="'+m+'"]');
    if(t)t.addEventListener('click',function(){selectMarker(m);});});
  age.addEventListener('input',function(){st.age=+age.value; if(C().useAge)render();});
  val.addEventListener('input',function(){var r=parseNum(val.value);
    if(r===null)return;                       // empty while typing: keep showing the last valid result
    if(isNaN(r)){st.bad=true;render();return;}
    st.bad=false; st.val[st.mk]=r/U()[1]; render();});
  val.addEventListener('blur',function(){if(!st.bad)val.value=disp(base());});
  ub.forEach(function(b,i){if(b)b.addEventListener('click',function(){setUnit(i);});});

  selectMarker('total');
})();
/* Deliver the ranges PDF when the Ranges Tool email form is submitted */
(function(){var f=document.querySelector('#ranges-email form');if(f){f.addEventListener('submit',function(){window.open('https://cdn.jsdelivr.net/gh/mingas/tb-ranges@3be9ee2413ab315bd6899f8e73e02812dcbff0f0/Testosterone-Optimal-Ranges-and-Blood-Test-Checklist.pdf','_blank');});}})();
