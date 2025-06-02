
const quizData = [
    {q: "Quel compositeur a écrit la 'Lettre à Élise' ?", o: ["Mozart", "Beethoven", "Chopin", "Bach"], a: 1},
    {q: "Quel instrument est surnommé 'le roi des instruments' ?", o: ["Piano", "Orgue", "Violon", "Guitare"], a: 1},
    {q: "Qui a composé 'Clair de Lune' ?", o: ["Debussy", "Liszt", "Schubert", "Ravel"], a: 0},
    {q: "Quel compositeur est célèbre pour ses 'Nocturnes' ?", o: ["Chopin", "Beethoven", "Brahms", "Haydn"], a: 0},
    {q: "Combien de touches possède un piano moderne ?", o: ["76", "85", "88", "90"], a: 2},
    {q: "Qui a composé 'La Marche Turque' ?", o: ["Mozart", "Beethoven", "Schumann", "Mendelssohn"], a: 0},
    {q: "Quel compositeur est associé à la période baroque ?", o: ["Bach", "Chopin", "Debussy", "Tchaïkovski"], a: 0},
    {q: "Quel compositeur a écrit 'Le Lac des cygnes' ?", o: ["Tchaïkovski", "Verdi", "Bach", "Liszt"], a: 0},
    {q: "Qui a composé la 'Sonate au clair de lune' ?", o: ["Mozart", "Beethoven", "Schumann", "Chopin"], a: 1},
    {q: "Quel compositeur est célèbre pour ses valses et polonaises ?", o: ["Liszt", "Chopin", "Brahms", "Ravel"], a: 1},
    {q: "Quel instrument n'a pas de cordes ?", o: ["Piano", "Orgue", "Guitare", "Violon"], a: 1},
    {q: "Qui a composé 'L'Hymne à la joie' ?", o: ["Mozart", "Beethoven", "Bach", "Schubert"], a: 1},
    {q: "Quel compositeur est connu pour ses opéras comme 'La Flûte enchantée' ?", o: ["Mozart", "Verdi", "Puccini", "Wagner"], a: 0},
    {q: "Quel instrument est à percussion ?", o: ["Piano", "Violon", "Flûte", "Trompette"], a: 0},
    {q: "Qui a composé 'Le Printemps' des Quatre Saisons ?", o: ["Vivaldi", "Bach", "Mozart", "Beethoven"], a: 0},
    {q: "Quel compositeur est célèbre pour ses ballets comme 'Casse-Noisette' ?", o: ["Tchaïkovski", "Ravel", "Debussy", "Liszt"], a: 0},
    {q: "Quel instrument est à vent ?", o: ["Flûte", "Piano", "Guitare", "Violon"], a: 0},
    {q: "Qui a composé 'Boléro' ?", o: ["Ravel", "Debussy", "Bizet", "Saint-Saëns"], a: 0},
    {q: "Quel compositeur est surnommé 'le roi du ragtime' ?", o: ["Scott Joplin", "Chopin", "Liszt", "Bach"], a: 0},
    {q: "Combien de pédales possède la plupart des pianos modernes ?", o: ["1", "2", "3", "4"], a: 2}
];

function renderQuiz(selec = {}, afficher = false) {
    const form = document.getElementById('quiz-form');
    if (!form) return;
    form.innerHTML = quizData.map((q, i) => `
        <div class="quiz-question">
        <div style="font-weight: bold;">${i+1}. ${q.q}</div>
        ${q.o.map((opt, j) => {
            let checked = selec[`q${i}`] == j ? 'checked' : '';
            let icon = '';
            if (afficher) {
                if (q.a === j) icon = ' <span style="color:green">✔️</span>';
                else if (selec[`q${i}`] == j) icon = ' <span style="color:red">❌</span>';
            }
            return `
                <label style="display:inline-block;margin-right:16px;">
                <input type="radio" name="q${i}" value="${j}" ${checked} ${afficher ? 'disabled' : ''}> ${opt}${icon}
                </label>
            `;
        }).join('')}
        </div>
    `).join('') + (!afficher ? `<button type="submit" class="submit-btn">Valider mes réponses</button>` : '');
}


function setupQuiz() {
    const form = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    if (!form || !quizResult) return;
    renderQuiz();
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let score = 0;
        let selectedAnswers = {};
        quizData.forEach((q, i) => {
        const selected = form.querySelector(`input[name='q${i}']:checked`);
        if (selected) {
            selectedAnswers[`q${i}`] = Number(selected.value);
            if (Number(selected.value) === q.a) score++;
        }
    });
    quizResult.style.display = 'block';
    quizResult.innerHTML = `<strong>Votre score : ${score} / ${quizData.length}</strong><br>` + ( score < 7 ? 'Tu peux mieux faire !' : score < 14 ? 'Pas mal !' : 'Tu es un pro !');
    renderQuiz(selectedAnswers, true);
    window.scrollTo({top: quizResult.offsetTop-100, behavior:'smooth'});
    });
}


document.addEventListener('DOMContentLoaded', setupQuiz);
const notesGame = [
    {name: 'mi', pos: 8},     
    {name: 'fa', pos: 7},  
    {name: 'sol', pos: 6},   
    {name: 'la', pos: 5},   
    {name: 'si', pos: 4},    
    {name: 'do', pos: 3},  
    {name: 'ré', pos: 2},    
    {name: 'mi', pos: 1},   
    {name: 'fa', pos: 0}     
];

const noteButtons = [
    {name: 'do'},
    {name: 'ré'},
    {name: 'mi'},
    {name: 'fa'},
    {name: 'sol'},
    {name: 'la'},
    {name: 'si'},
];

function drawCle(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(20, 30 + i * 16);
        ctx.lineTo(ctx.canvas.width - 20, 30 + i * 16);
        ctx.stroke();
    }
    ctx.font = '48px serif';
    ctx.fillText('𝄞', 28, 80);
}

function drawNote(ctx, noteIdx, measureIdx) {
    const x0 = 80;
    const measureWidth = 110;
    const x = x0 + measureIdx * measureWidth;
    const y = 30 + notesGame[noteIdx].pos * 8;
    ctx.beginPath();
    ctx.ellipse(x, y, 13, 8, 0, 0, 2 * Math.PI);
    ctx.fillStyle = '#b6a07a';
    ctx.fill();
    ctx.strokeStyle = '#222';
    ctx.stroke();
}

function drawMesures(ctx) {
    const x0 = 80;
    const measureWidth = 110;
    for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(x0 + i * measureWidth, 30);
        ctx.lineTo(x0 + i * measureWidth, 30 + 4 * 16);
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

function setupMusicGame() {
    const cle = document.getElementById('musiqueCanvas');
    const btnsDiv = document.getElementById('note-buttons');
    const playBtn = document.getElementById('play-music-game');
    const msgDiv = document.getElementById('music-game-message');
    if (!cle || !btnsDiv || !playBtn) return;
    const ctx = cle.getContext('2d');
    drawCle(ctx);
    drawMesures(ctx);
    btnsDiv.innerHTML = '';
    noteButtons.forEach((n) => {
        const btn = document.createElement('button');
        btn.textContent = n.name.toUpperCase();
        btn.className = 'submit-btn';
        btn.style.margin = '0 6px 8px 6px';
        btn.disabled = true;
        btn.onclick = () => checkMusicNote(n.name);
        btnsDiv.appendChild(btn);
    });
    let sequence = [];
    let current = 0;
    let playing = false;
    function startGame() {
        sequence = [];
        for (let i = 0; i < 4; i++) 
            sequence.push(Math.floor(Math.random() * notesGame.length));
        current = 0;
        playing = true;
        drawCle(ctx);
        drawMesures(ctx);
        btnsDiv.querySelectorAll('button').forEach(b => b.disabled = true);
        msgDiv.textContent = 'Clique sur la bonne note !';
        showNextNote();
    }
    function showNextNote() {
        drawCle(ctx);
        drawMesures(ctx);
        for (let i = 0; i < current; i++) 
            drawNote(ctx, sequence[i], i);
        if (current < 4) {
            drawNote(ctx, sequence[current], current);
            const noteName = notesGame[sequence[current]].name;
            btnsDiv.querySelectorAll('button').forEach((b) => b.disabled = b.textContent.toLowerCase() !== noteName);
        } else {
            btnsDiv.querySelectorAll('button').forEach(b => b.disabled = true);
            msgDiv.textContent = 'Bravo ! Tu as trouvé toutes les notes !';
            playing = false;
        }
    }
    function checkMusicNote(name) {
        if (!playing) return;
        const expected = notesGame[sequence[current]].name;
        if (name === expected) {
            current++;
            if (current < 4) {
                msgDiv.textContent = 'Bien joué ! Passe à la suivante.';
                setTimeout(() => {
                    msgDiv.textContent = 'Clique sur la bonne note !';
                    showNextNote();
                }, 700);
            } else 
                showNextNote();
        } else 
            msgDiv.textContent = "Ce n'est pas la bonne note";
    };

    playBtn.onclick = () => {
        startGame();
    };
}

document.addEventListener('DOMContentLoaded', setupMusicGame);
    document.addEventListener('DOMContentLoaded', function() {
        function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
        }

    const musicQuiz = [
        {
            audio: "../audio/Nocturne in E flat major, Op. 9 no. 2.mp3",
            answers: [
            { text: "Nocturne op. 9 no. 2", value: "Nocturne" },
            { text: "Sonate au Clair de Lune (Beethoven)", value: "Moonlight Sonata" },
            { text: "Le Lac des cygnes (Tchaïkovski)", value: "Swan Lake" }
            ],
            correct: "Nocturne",
            message: "Bravo ! C'est bien le Nocturne op. 9 n°2 de Chopin 🎉"
        },
        {
            audio: "../audio/Alla Turca.mp3",
            answers: [
            { text: "Alla Turca (Mozart)", value: "Alla Turca" },
            { text: "Gymnopédie n°1 (Satie)", value: "Gymnopedie" },
            { text: "Prélude en do majeur (Bach)", value: "Prelude" }
            ],
            correct: "Alla Turca",
            message: "Bravo ! C'est bien 'Alla Turca' de Mozart 🎉"
        },
        {
            audio: "../audio/Für Elise.mp3",
            answers: [
            { text: "Für Elise (Beethoven)", value: "Fur Elise" },
            { text: "Clair de Lune (Debussy)", value: "Clair de Lune" },
            { text: "Nocturne op. 9 no. 2 (Chopin)", value: "Nocturne" }
            ],
            correct: "Fur Elise",
            message: "Bravo ! C'est bien 'Für Elise' de Beethoven 🎉"
        },
        {
            audio: "../audio/Arabesque No. 1.mp3",
            answers: [
            { text: "Arabesque n°1 (Debussy)", value: "Arabesque" },
            { text: "Prélude en do majeur (Bach)", value: "Prelude" },
            { text: "Gymnopédie n°1 (Satie)", value: "Gymnopedie" }
            ],
            correct: "Arabesque",
            message: "Bravo ! C'est bien 'Arabesque n°1' de Debussy 🎉"
        },
        {
            audio: "../audio/Etude Op. 10, no. 4 in C sharp minor - 'Torrent'.mp3",
            answers: [
            { text: "Étude 'Torrent' op.10 n°4 (Chopin)", value: "Torrent" },
            { text: "Sonate au Clair de Lune (Beethoven)", value: "Moonlight Sonata" },
            { text: "Alla Turca (Mozart)", value: "Alla Turca" }
            ],
            correct: "Torrent",
            message: "Bravo ! C'est bien l'Étude 'Torrent' op.10 n°4 de Chopin 🎉"
        }
    ];

    let currentMusic = 0;
    let score = 0;
    let mixedAnswers = [];

    const audio = document.getElementById('music-audio');
    const form = document.getElementById('guess-music-form');
    const resultDiv = document.getElementById('guess-music-result');
    const nextBtn = document.getElementById('next-music-btn');

    function loadMusicQuiz(index) {
        audio.style.display = '';
        audio.querySelector('source').src = musicQuiz[index].audio;
        audio.load();
        mixedAnswers[index] = shuffleArray([...musicQuiz[index].answers]);
        form.innerHTML = '';
        mixedAnswers[index].forEach(ans => {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = "guess-btn";
            btn.dataset.answer = ans.value;
            btn.textContent = ans.text;
            form.appendChild(btn);
        });
        resultDiv.textContent = '';
        resultDiv.style.color = '';
        nextBtn.style.display = 'none';
        nextBtn.textContent = (index < musicQuiz.length - 1) ? "Suivant" : "Voir le résultat";
        Array.from(form.children).forEach(btn => btn.disabled = false);
    }

    function checkReponse(e) {
        if (!e.target.classList.contains('guess-btn')) return;
        const answer = e.target.dataset.answer;
        const correct = musicQuiz[currentMusic].correct;
        Array.from(form.children).forEach(btn => btn.disabled = true);
        if (answer === correct) {
            resultDiv.textContent = musicQuiz[currentMusic].message;
            resultDiv.style.color = "green";
            score++;
        } else {
            const correctText = mixedAnswers[currentMusic].find(a => a.value === correct).text;
            resultDiv.textContent = "Mauvaise réponse. La bonne réponse était : " + correctText;
            resultDiv.style.color = "red";
        }
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = (currentMusic < musicQuiz.length - 1) ? "Suivant" : "Voir le résultat";
    }

    function showFinalResult() {
        let msg = "";
        if (score === musicQuiz.length)
            msg = `🎉 Parfait ! ${score} / ${musicQuiz.length} bonnes réponses. Tu es un(e) vrai(e) mélomane !`;
        else if (score >= musicQuiz.length - 1)
            msg = `👏 Presque parfait ! ${score} / ${musicQuiz.length} bonnes réponses.`;
        else if (score >= Math.floor(musicQuiz.length / 2))
            msg = `Pas mal ! ${score} / ${musicQuiz.length} bonnes réponses. Continue à t'entraîner !`;
        else
            msg = `Tu as eu ${score} / ${musicQuiz.length}. Tu peux réessayer pour t'améliorer !`;
        resultDiv.innerHTML = `<span style="color:#1a7f1a;font-weight:bold;">${msg}</span>`;
        nextBtn.style.display = 'none';
        form.innerHTML = '';
        audio.style.display = 'none';
        }
    form.addEventListener('click', checkReponse);

    nextBtn.addEventListener('click', function() {
        if (currentMusic < musicQuiz.length - 1) {
            currentMusic++;
            loadMusicQuiz(currentMusic);
        } else 
            showFinalResult();
    });
    loadMusicQuiz(currentMusic);
});

document.addEventListener('DOMContentLoaded', function() {
    const quizSection = document.getElementById('quiz-section');
    const musicGameSection = document.getElementById('PartieJeuMusique');
    const guessMusicSection = document.getElementById('guess-music-section');
    const cards = document.getElementById('decouvrirjeux');
    document.getElementById('afficherquiz-btn').onclick = function() {
        cards.style.display = 'none';
        quizSection.style.display = 'block';
    };
    document.getElementById('afficherPartition-btn').onclick = function() {
        cards.style.display = 'none';
        musicGameSection.style.display = 'block';
        if (typeof setupMusicGame === 'function') setupMusicGame();
    };
    document.getElementById('afficherEcoute-btn').onclick = function() {
        cards.style.display = 'none';
        guessMusicSection.style.display = 'block';
    };
    document.getElementById('retour-carte-quiz').onclick = function() {
        quizSection.style.display = 'none';
        cards.style.display = 'flex';
    };
    document.getElementById('retour-carte-music').onclick = function() {
        musicGameSection.style.display = 'none';
        cards.style.display = 'flex';
    };
    document.getElementById('retour-carte-ecoute').onclick = function() {
        guessMusicSection.style.display = 'none';
        cards.style.display = 'flex';
    };
});
