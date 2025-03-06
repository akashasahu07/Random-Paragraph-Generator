const paragraphs = [
    "Technology is evolving at an unprecedented rate, shaping the future of industries and human interactions. Artificial intelligence, blockchain, and quantum computing are no longer distant concepts but integral to modern advancements. The challenge now lies in ethical implementation and responsible innovation.",

    "Success is not about talent alone but persistence and resilience. Every failure is a lesson, and every setback is an opportunity to grow. The greatest minds in history faced countless obstacles, but their determination turned dreams into reality.",

    "Education is the foundation of progress. In the digital age, knowledge is more accessible than ever through online courses, tutorials, and open-source platforms. Learning is no longer confined to classrooms; it is an ongoing journey of curiosity and growth.",

    "The rise of automation and artificial intelligence is reshaping the job market. While some fear job displacement, history has shown that innovation creates new opportunities. The key to staying relevant is continuous learning and adaptability.",

    "Challenges are what make life interesting, and overcoming them is what makes life meaningful. Every problem has a solution; it just requires the right mindset and perseverance to uncover it. Growth begins where comfort ends.",

    "Cybersecurity is more critical than ever in a world driven by digital transformation. With increasing cyber threats, individuals and organizations must prioritize data protection and privacy. Awareness and proactive security measures are the first steps toward a safer digital space.",

    "The human brain is one of the most powerful tools ever known. It can adapt, learn, and create extraordinary things. Feeding it with knowledge, positive thoughts, and continuous challenges ensures a lifetime of growth and achievement.",

    "The metaverse is no longer science fiction. Virtual reality, augmented reality, and decentralized networks are transforming how people interact and experience the digital world. This technological revolution will redefine entertainment, education, and even workplaces.",

    "Failure is not the opposite of success; it is a part of it. Every great inventor, entrepreneur, and leader has failed before achieving greatness. The key is to learn from mistakes, refine strategies, and never stop moving forward.",

    "The world of software development is built on collaboration and innovation. Open-source projects have fueled major technological breakthroughs, proving that collective intelligence can drive progress beyond individual limitations."
];

const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}


function generate() {
    if (item.value == 0) {
        alert("The value Cann't be Zero!");
    } else if (item.value > paragraphs.length) {
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
    } else {
        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);

        const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
        const paragraphsHTML = selectedParagraphs.map(paragraphs => `<ul><li>${paragraphs}</li></ul>`).join("");
        dataContainer.innerHTML = paragraphsHTML;
    }
}