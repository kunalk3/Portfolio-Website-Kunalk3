var audio = new Audio('./packages/js/sentmessage.mp3');
var contactString = "<div class='social'>\
    <a href='https://www.linkedin.com/in/kunalkolhe3/' target='_blank' rel='noopener noreferrer'> <div class='socialItem' id='call'><img class='socialItemI' src='./packages/images/linkedin.svg' alt=''> Linkedin </div> </a> \
    <a target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kunalkoleh333@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='./packages/images/gmail.svg' alt=''> Email </div> </a> \
    <a target='_blank' href='tel:+91_ _ _ _ _ _ _ 7 0 1'> <div class='socialItem' id='call'><img class='socialItemI' src='./packages/images/phone.svg'/> Mobile </div> </a>\
    <a target='_blank' href='https://github.com/kunalk3/'> <div class='socialItem' id='call'><img class='socialItemI' src='./packages/images/github.svg' alt=''> GitHub </div> </a> \
    <a target='_blank' href='https://wa.me/91_ _ _ _ _ _ _ 701'> <div class='socialItem' id='call'><img class='socialItemI' src='./packages/images/whatsapp.svg' alt=''> Whatsapp </div> </a> \
    <a target='_blank' href='https://www.instagram.com/kkunalkkolhe/'> <div class='socialItem' id='call'><img class='socialItemI' src='./packages/images/instagram.svg' alt=''> Instagram </div> </a> </div>";
var resumeString = "<img src='../packages/images/resumeThumbnail.PNG' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='../packages/images/pdf.png'><label>KunalK_Resume.pdf</label></div><a download href='../packages/js/KunalK_Resume.pdf'><img class='download' src='../packages/images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed/v1/place?q=pune+viman+nagar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8' class='map'></iframe></div>Solitaire Business Hub, opp. Neco Garden Road, Society, Clover Park, Viman Nagar, Pune, Maharashtra 411014";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function reset() {
    document.getElementById("listUL").innerHTML = "";
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce("intro") }, 1000);
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hey there 👋🏻,<br><span class='sk bold alink'>Kunal </span> this side. Welcome to chatbot assistance.<br><br>\
                    Send <span class='bold'><a class='alink'>'help'</span></a> to know more about me with chat model.<br>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("Send keyword to get what exactly you are looking for,<br>\
                ♦ <span class='sk bold alink'>'summary'</span>   - To know about my professional summary<br>\
                ♦ <span class='sk bold alink'>'skills'</span>    - To know about my skills stack<br>\
                ♦ <span class='sk bold alink'>'resume'</span>    - To get my resume<br>\
                ♦ <span class='sk bold alink'>'education'</span> - To know about my educational details<br>\
                ♦ <span class='sk bold alink'>'address'</span>   - To get my address<br>\
                ♦ <span class='sk bold alink'>'contact'</span>   - To connect with me on social platforms<br>\
                ♦ <span class='sk bold alink'>'projects'</span>  - To know about my projects contibutions<br>\
                ♦ <span class='sk bold alink'>'clear'</span>     - To clear chat<br>\
                ♦ <span class='sk bold alink'>'about'</span>     - To know about this bot</span>");
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "skills":
            sendTextMessage("<span class='sk bold alink'>◐ Expertise</span> - Python, Pandas, Numpy, Scikit learn, SciPy, Regression, Classification, Clustering, Seaborn.<br>\
                <span class='sk bold alink'>◐ Proficient</span> - SQL, PyCaret, TensorFlow, Keras, AutoML, NLP, Selenium, Web Scraping, Automations, Plotly.<br>\
                <span class='sk bold alink'>◐ Familiar</span> - ChatGPT, LangChain, Gemini, LLM, LSTM, RNN, Gensim, C/C++, Java, Javascript, HTML5, CSS5.<br>\
                <span class='sk bold alink'>◐ Cloud / ETL Tools</span> - Airflow, Big Query, S3, Vertex AI, GCS, SNS, Composer, DAG, Streamlit, Gradio, Flask.<br>\
                <span class='sk bold alink'>◐ IDE / Platforms</span> - Notebooks, PyCharm, VS Code, Jupyter lab, Google colab, Spider, Eclipse, Postman, Linux, Window, Jira, Git.");
            break;

        case "summary":
            sendTextMessage("<span class='sk bold alink'>></span> A Data Scientist having 5.5+ years of experience in data analytics, data science, AI-ML techniques with processing, modeling, insights, production deployment and support.<br>\
                <span class='sk bold alink'>></span> Developed, re-configured and monitored end to end production data pipelines on cloud, airflow.<br>\
                <span class='sk bold alink'>></span> Delivered data-driven AI solutions with process automations, data management, custom model training with AI tools to resolve business challenges.<br>\
                <span class='sk bold alink'>></span> Involved in scrum calls, client’s weekly meetings, architecture and design documental reviews with process optimization, handled junior’s assignments.<br>\
                <span class='sk bold alink'>></span> Managed stakeholders, attained external data vendors, provided end-to-end demo with data dictionaries and mentored team members.<br>\
                <span class='sk bold alink'>></span> Currently playing on OpenAI, LLM, Vector Db, LangChains.");
            break;

        case "education":
            sendTextMessage("<span class='sk bold alink'>◐ Post Graduation</span> - Advance Computing (PG-DAC).<br>\
                CDAC Kharghar, Mumbai, MH | (2018)<br><br>\
                <span class='sk bold alink'>◐ Graduation</span> - Electrical Enginerring.<br>\
                BATU University, Raigarh, MH | (2017)<br><br>\
                <span class='sk bold alink'>◐ Higher / Secondary School</span> - Science.<br>\
                K.N.V. MH | (2013 / 2011)<br>");
            break

        case "address":
            sendTextMessage(addressString);
            break;

        case "clear":
            clearChat();
            break;

        case "about":
            sendTextMessage("This Chatbot is built and integrated in HTML, CSS and JavaScript. <br><br>AI Chatbot Assistance (OpenAI + LangChain) is currently unlinked from this page due to security reasons. <br><br>- Designed and Developed by <span class='bold alink'>Kunal K.</span>");
            break;

        case "contact":
            sendTextMessage(contactString);
            break;

        case "projects":
            sendTextMessage("Check out my project highlighted contributions, visit my GitHub Account / Porfolio Sections.<br><br><div class='social'><a target='_blank' href='https://github.com/kunalk3/'> <div class='socialItem'><img class='socialItemI' src='./packages/images/github.svg' alt=''></div> </a></div>");
            break;

        case "new":
            sendTextMessage(addressString);
            break;

        default:
            setTimeout(() => {
                sendTextMessage(getRandomAlternativeResponse())
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

const alternative = [
    "I'm a bot, I'm not a human.🤨<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "Hey I couldn't catch you...😢<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "Can you ask something else.❓<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "Hey, I'm listening...👂<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "I didn't quite catch, please try again.🤔<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "I'm not sure on your input.🧐<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "Hmm, that's a bit confusing. Could you try asking in a different way?🤨<br<br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "Could you try asking in a different way?🤨<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage.",
    "I apologize, but I couldn't grasp your input.🙁<br><br>Send <span class='sk bold alink'>'help'</span> to know more about usage."
  ];
function getRandomAlternativeResponse() {
    return alternative[Math.floor(Math.floor(Math.random() * alternative.length))];
  }


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "... ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
