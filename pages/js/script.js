// Getting Element
// Input fields
const namE = document.getElementById('name')
const fname = document.getElementById('fname')
const phno = document.getElementById('phno')
const nicno = document.getElementById('nicno')
const nationality = document.getElementById('nation')
const religion = document.getElementById('religion')
const mstatus = document.getElementById('mstatus')
const dob = document.getElementById('dob')
const address = document.getElementById('address')
const mail = document.getElementById('mail')
const ed1 = document.getElementById('ed1')
const ed1from = document.getElementById('ed1from')
const ed2 = document.getElementById('ed2')
const ed2from = document.getElementById('ed2from')
const job1 = document.getElementById('job1')
const job1where = document.getElementById('job1where')
const job1date = document.getElementById('job1date')
const job2 = document.getElementById('job2')
const job2where = document.getElementById('job2where')
const job2date = document.getElementById('job2date')
const job3 = document.getElementById('job3')
const job3where = document.getElementById('job3where')
const job3date = document.getElementById('job3date')
const skill1 = document.getElementById('skill1')
const skill1Range = document.getElementById('skill1range')
const skill2 = document.getElementById('skill2')
const skill2Range = document.getElementById('skill2range')
const skill3 = document.getElementById('skill3')
const skill3Range = document.getElementById('skill3range')
const skill4 = document.getElementById('skill4')
const skill4Range = document.getElementById('skill4range')
const skill5 = document.getElementById('skill5')
const skill5Range = document.getElementById('skill5range')
const lang1 = document.getElementById('lang1')
const lang1Range = document.getElementById('lang1range')
const lang2 = document.getElementById('lang2')
const lang2Range = document.getElementById('lang2range')
const hobby1 = document.getElementById('hb1')
const hobby2 = document.getElementById('hb2')
const resumePic = document.getElementById('picimg')

//buttons and divs
const genBtn = document.getElementById('generatebtn')
const editBtn = document.getElementById('editbtn')
const formDiv = document.getElementById('resumeForm')
const resumeDiv = document.getElementById('resumeGen')
const optjobDiv = document.getElementById('optjob')
const requiredDiv = document.getElementById('reqdiv')

// html resume fields

const GRnamE = document.getElementById('GRNAME')
const GRpinfo = document.getElementById('GRPINFO')
const GRphno = document.getElementById('GRPHNO')
const GRaddress = document.getElementById('GRADDRESS')
const GRmail = document.getElementById('GRMAIL')
const GRed1 = document.getElementById('GRED1')
const GRed1from = document.getElementById('GRED1FROM')
const GRed2 = document.getElementById('GRED2')
const GRed2from = document.getElementById('GRED2FROM')
const GRjob1 = document.getElementById('GRJOB1')
const GRjob1where = document.getElementById('GRJOB1WHERE')
const GRjob1date = document.getElementById('GRJOB1DATE')
const GRjob2 = document.getElementById('GRJOB2')
const GRjob2where = document.getElementById('GRJOB2WHERE')
const GRjob2date = document.getElementById('GRJOB2DATE')
const GRjob3 = document.getElementById('GRJOB3')
const GRjob3where = document.getElementById('GRJOB3WHERE')
const GRjob3date = document.getElementById('GRJOB3DATE')
const GRskill1 = document.getElementById('GRSKILL1')
const GRskill1Range = document.getElementById('GRSKILLRANGE1')
const GRskill2 = document.getElementById('GRSKILL2')
const GRskill2Range = document.getElementById('GRSKILLRANGE2')
const GRskill3 = document.getElementById('GRSKILL3')
const GRskill3Range = document.getElementById('GRSKILLRANGE3')
const GRskill4 = document.getElementById('GRSKILL4')
const GRskill4Range = document.getElementById('GRSKILLRANGE4')
const GRskill5 = document.getElementById('GRSKILL5')
const GRskill5Range = document.getElementById('GRSKILLRANGE5')
const GRlang1 = document.getElementById('GRLANG1')
const GRlang1Range = document.getElementById('GRLANG1RANGE')
const GRlang2 = document.getElementById('GRLANG2')
const GRlang2Range = document.getElementById('GRLANG2RANGE')
const GRhobby1 = document.getElementById('GRHB1')
const GRhobby2 = document.getElementById('GRHB2')
const GRresumePic = document.getElementById('GRPICIMG')

// code 

genBtn.addEventListener('click',()=>{
    if( namE.value === "" || 
        fname.value === "" || 
        phno.value === "" || 
        nicno.value === "" || 
        nationality.value === "" || 
        religion.value === "" || 
        mstatus.value === "" || 
        dob.value === "" || 
        address.value === "" || 
        mail.value === "" || 
        ed1.value === "" || 
        ed1from.value === "" || 
        ed2.value === "" || 
        ed2from.value === "" || 
        job1.value === "" || 
        job1where.value === "" || 
        job1date.value === "" || 
        job2.value === "" || 
        job2where.value === "" || 
        job2date.value === "" || 
        skill1.value === "" || 
        skill2.value === "" || 
        skill3.value === "" || 
        skill4.value === "" || 
        skill5.value === "" || 
        lang1.value === "" || 
        lang2.value === "" || 
        hobby1.value === "" || 
        hobby2.value === "")
        {
        requiredDiv.style.display = 'block'
        
    } else { 
        requiredDiv.style.display = 'none'
        optjobDiv.style.display = 'none'
      GRnamE.innerHTML = namE.value
      GRpinfo.innerHTML = `Father Name &nbsp;&nbsp;: &nbsp;&nbsp;${fname.value}<br>Date of Birth &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;${dob.value}<br>CNIC No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;${nicno.value}<br>Nationality &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;${nationality.value}<br>Religion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;${religion.value}<br>Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;${mstatus.value}`
      GRphno.innerHTML = phno.value
      GRaddress.innerHTML = address.value
      GRmail.innerHTML = mail.value
      GRed1.innerHTML = ed1.value
      GRed1from.innerHTML = ed1from.value
      GRed2.innerHTML = ed2.value
      GRed2from.innerHTML = ed2from.value
      GRjob1.innerHTML = job1.value
      GRjob1where.innerHTML = job1where.value
      GRjob1date.innerHTML = job1date.value
      GRjob2.innerHTML = job2.value
      GRjob2where.innerHTML = job2where.value
      GRjob2date.innerHTML = job2date.value
      GRskill1.innerHTML = skill1.value
      GRskill2.innerHTML = skill2.value
      GRskill3.innerHTML = skill3.value
      GRskill4.innerHTML = skill4.value
      GRskill5.innerHTML = skill5.value
      GRlang1.innerHTML = lang1.value
      GRlang2.innerHTML = lang2.value
      GRhobby1.innerHTML = hobby1.value
      GRhobby2.innerHTML = hobby2.value
      GRskill1Range.style.width = `${skill1Range.value}%`
      GRskill2Range.style.width = `${skill2Range.value}%`
      GRskill3Range.style.width = `${skill3Range.value}%`
      GRskill4Range.style.width = `${skill4Range.value}%`
      GRskill5Range.style.width = `${skill5Range.value}%`
      GRlang1Range.style.width = `${lang1Range.value}%`
      GRlang2Range.style.width = `${lang2Range.value}%`
      if (job3.value !== '' && job3where.value !== '' && job3date.value !== '') {
        optjobDiv.style.display = 'block'
        GRjob3.innerHTML = job3.value
      GRjob3where.innerHTML = job3where.value
      GRjob3date.innerHTML = job3date.value
      }
      resumePic.addEventListener('change', function (event){
        const file = event.target.files[0]; 
    
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                
                GRresumePic.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        } else {
            
        }
        
        
    });
    formDiv.style.display = 'none'
        resumeDiv.style.display = 'block'
    
    }
    
})

editBtn.addEventListener('click',()=>{
    formDiv.style.display = 'flex'
        resumeDiv.style.display = 'none'
})