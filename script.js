const videos = [
  {
    "phase": "Defensive",
    "category": "Screening",
    "title": "Screen the Center & Shift",
    "file": "assets/videos/DEF01_Part4_screen_center_and_shift.mp4",
    "sequence": "Milan moves the ball across midfield and Inter’s midfield three slide with it while protecting central access.",
    "doneWell": "The nearest midfielder can pressure while the other two stay connected and screen the dangerous inside pass.",
    "improve": "The support behind the presser must arrive early enough that Milan cannot play through the first pressure into the central pocket.",
    "cue": "Presser goes → partners squeeze"
  },
  {
    "phase": "Defensive",
    "category": "Compactness",
    "title": "Compact Midfield Around the Box",
    "file": "assets/videos/DEF02_Part5_compact_midfield_around_box.mp4",
    "sequence": "Milan sustains possession near Inter’s box and the midfield three have to protect cutbacks, second balls and central combinations.",
    "doneWell": "Inter narrows centrally and keeps numbers between the ball and goal rather than all three midfielders chasing the same player.",
    "improve": "Keep scanning runners behind while still closing the cutback zone; compactness should not become ball-watching.",
    "cue": "Protect center • see runners"
  },
  {
    "phase": "Defensive",
    "category": "Pressing",
    "title": "Collective Shift & Cover",
    "file": "assets/videos/DEF03_Part7_collective_shift_and_cover.mp4",
    "sequence": "Milan progresses toward one side and Inter’s midfield moves across as a unit.",
    "doneWell": "The first midfielder approaches the ball while the others close nearby options and protect the space behind the press.",
    "improve": "If the first presser cannot arrive under control, delay instead of diving in and opening the next pass.",
    "cue": "Press together, not alone"
  },
  {
    "phase": "Defensive",
    "category": "Recovery",
    "title": "Recover Inside, Then Press",
    "file": "assets/videos/DEF04_Part8_recover_inside_then_press.mp4",
    "sequence": "Inter’s first pressure is bypassed and the midfield has to recover while Milan continues forward.",
    "doneWell": "The recovery movement is toward the middle first, rebuilding central protection before another player steps out.",
    "improve": "The next presser should go only after the other two have restored cover and screening positions.",
    "cue": "Inside first → then out"
  },
  {
    "phase": "Possession",
    "category": "Line Breaking",
    "title": "Play Through Midfield & Support",
    "file": "assets/videos/POS01_Part4_play_through_midfield_and_support.mp4",
    "sequence": "Inter connects through midfield and uses the central players to move possession beyond Milan’s first pressure.",
    "doneWell": "The midfielders offer different passing heights instead of standing in one line, creating a forward option and a safe outlet.",
    "improve": "After the first forward pass, the passer should move quickly enough to support the receiver before Milan can close the next action.",
    "cue": "Play through → support forward"
  },
  {
    "phase": "Possession",
    "category": "Recycling",
    "title": "Keep Ball & Create a New Angle",
    "file": "assets/videos/POS02_Part5_keep_ball_create_new_angle.mp4",
    "sequence": "The direct forward lane is closed, so Inter keeps possession and changes the angle of attack.",
    "doneWell": "The midfield does not force a crowded pass; players reposition to keep the ball and reopen the field.",
    "improve": "The off-ball midfielders can move earlier so the player in possession always has at least two clear options.",
    "cue": "Pass → move → new angle"
  },
  {
    "phase": "Possession",
    "category": "Support",
    "title": "Build a Triangle, Then Progress",
    "file": "assets/videos/POS03_Part6_build_triangle_then_progress.mp4",
    "sequence": "Inter forms a midfield triangle around the ball to create a free player and progress.",
    "doneWell": "One midfielder stays underneath while the others occupy different lines, making it difficult for one Milan player to cover two options.",
    "improve": "Avoid drifting onto the same horizontal line after the first pass; keep the triangle alive as the ball travels.",
    "cue": "Triangles, not straight lines"
  },
  {
    "phase": "Possession",
    "category": "Recycling",
    "title": "Reset, Recycle & Reposition",
    "file": "assets/videos/POS04_Part8_reset_recycle_and_reposition.mp4",
    "sequence": "Inter cannot progress immediately, so the midfield resets the attack and repositions around the new ball location.",
    "doneWell": "The team values possession and uses the reset to create better spacing instead of forcing the first forward option.",
    "improve": "The advanced midfielders should use the recycle moment to move into a new pocket rather than waiting in the same marked space.",
    "cue": "Reset the ball → reset your position"
  },
  {
    "phase": "Final Third",
    "category": "Runs",
    "title": "Break a Line, Then Arrive in the Box",
    "file": "assets/videos/ATT01_Part4_break_line_then_arrive_box.mp4",
    "sequence": "Inter breaks Milan’s midfield line and a midfielder continues the attack by moving into the next space.",
    "doneWell": "The midfield does not stop after progression; the next runner attacks a higher line and gives the ball carrier a new option.",
    "improve": "Time the run so it begins once the receiver can face forward — too early and the runner is easy to track.",
    "cue": "Break one line → attack the next"
  },
  {
    "phase": "Final Third",
    "category": "Combination",
    "title": "Combine Around the Box",
    "file": "assets/videos/ATT02_Part6_combine_around_box.mp4",
    "sequence": "Inter uses short support around the edge of the final third to create a way through Milan’s block.",
    "doneWell": "The midfield provides nearby support without all three collapsing onto the ball, preserving both depth and a forward run.",
    "improve": "The supporting midfielder should receive side-on whenever possible so the next action can go forward instead of automatically backward.",
    "cue": "One supports • one runs • one balances"
  },
  {
    "phase": "Final Third",
    "category": "Runs",
    "title": "Run Beyond After Progression",
    "file": "assets/videos/ATT03_Part7_run_beyond_after_progression.mp4",
    "sequence": "After Inter progresses, a midfielder attacks beyond the next line rather than staying underneath the ball.",
    "doneWell": "The forward movement stretches Milan vertically and creates a decision for the defender: follow the runner or step to the ball.",
    "improve": "Coordinate the run with the striker/wingback so two players do not attack the same lane.",
    "cue": "If teammate faces forward → threaten beyond"
  },
  {
    "phase": "Final Third",
    "category": "Second Wave",
    "title": "Second Wave & Cutback Zone",
    "file": "assets/videos/ATT04_Part7_second_wave_and_cutback_zone.mp4",
    "sequence": "The first attacking action reaches the box and Inter’s midfield positions for the next phase.",
    "doneWell": "A midfielder stays available around the edge/cutback area instead of all players running to the goal line.",
    "improve": "Arrive late enough to stay free, but early enough to attack a cutback or second ball immediately.",
    "cue": "First wave attacks → second wave arrives"
  },
  {
    "phase": "Final Third",
    "category": "Transition Attack",
    "title": "Transition Support & Box Arrival",
    "file": "assets/videos/ATT05_Part8_transition_support_and_box_arrival.mp4",
    "sequence": "Inter moves forward quickly and the midfield has to support the transition without losing balance behind the attack.",
    "doneWell": "The midfield advances in layers: one supports the ball, another can arrive higher, while a player remains underneath for balance.",
    "improve": "Do not admire the progressive pass; accelerate into the next supporting position immediately.",
    "cue": "Pass forward → move forward"
  }
];

const filterRow=document.getElementById('filterRow');
const videoGrid=document.getElementById('videoGrid');
const menuBtn=document.getElementById('menuBtn');
const siteNav=document.getElementById('siteNav');
menuBtn?.addEventListener('click',()=>siteNav.classList.toggle('open'));
siteNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>siteNav.classList.remove('open')));
let phase='All'; let category='All';
function button(label,type,current){const b=document.createElement('button');b.className='filter-btn'+(label===current?' active':'');b.textContent=label;b.onclick=()=>{if(type==='phase')phase=label;else category=label;renderFilters();renderVideos();};return b;}
function renderFilters(){filterRow.innerHTML='';const p=document.createElement('div');p.className='filter-group';const pl=document.createElement('span');pl.className='filter-label';pl.textContent='Phase';p.append(pl);['All','Defensive','Possession','Final Third'].forEach(x=>p.append(button(x,'phase',phase)));filterRow.append(p);const c=document.createElement('div');c.className='filter-group';const cl=document.createElement('span');cl.className='filter-label';cl.textContent='Concept';c.append(cl);['All',...new Set(videos.map(v=>v.category))].forEach(x=>c.append(button(x,'category',category)));filterRow.append(c);}
function renderVideos(){const selected=videos.filter(v=>(phase==='All'||v.phase===phase)&&(category==='All'||v.category===category));videoGrid.innerHTML=selected.map(v=>`<article class="video-card"><video controls preload="metadata"><source src="${v.file}" type="video/mp4">Your browser does not support MP4 video.</video><div class="video-body"><div class="video-meta"><span class="phase-pill ${v.phase==='Defensive'?'phase-defend':v.phase==='Possession'?'phase-possess':'phase-attack'}">${v.phase}</span><span>${v.category}</span></div><h3>${v.title}</h3><div class="analysis-block"><h4>What the sequence shows</h4><p>${v.sequence}</p></div><div class="analysis-block good"><h4>What the midfielders did well</h4><p>${v.doneWell}</p></div><div class="analysis-block improve"><h4>What could be better / focus</h4><p>${v.improve}</p></div><div class="tip"><strong>Coaching cue:</strong> ${v.cue}</div></div></article>`).join('');document.getElementById('videoCount').textContent=`${selected.length} clips shown`;}
renderFilters();renderVideos();