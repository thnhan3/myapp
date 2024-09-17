const userData = [
    {
        data: ['java', 'react', 'spring', 'database', 'typescript'],
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt qui labore nemo perspiciatis laborum, assumenda quasi? Deserunt ut expedita quidem a voluptate cum magni nihil perferendis? Dolorem, libero! Laborum, magnam.",
        name: 'tran huu nhan',
        img: 'https://i.pinimg.com/736x/14/f2/20/14f220b7c0de394a5276dfb42e54f598.jpg'
    },
    {
        data: ['python', 'django', 'machine learning', 'data science'],
        intro: "Sono appassionato di data science e sviluppo backend con Python e Django. Mi piace esplorare nuovi algoritmi e creare modelli predittivi.",
        name: 'Marco Rossi',
        img: 'https://i.pinimg.com/236x/52/93/f4/5293f43548d985eced5552649270e9a5.jpg'
    },
    {
        data: ['javascript', 'node.js', 'mongodb', 'react native'],
        intro: "Sviluppo applicazioni mobile cross-platform con React Native e backend con Node.js e MongoDB. Amo creare interfacce utente intuitive e performanti.",
        name: 'Anna Bianchi',
        img: 'https://i.pinimg.com/474x/79/53/31/7953311510241bd9cb20704f857b402b.jpg'
    },
    {
        data: ['c#', '.net', 'sql server', 'azure'],
        intro: "Sono specializzato nello sviluppo di applicazioni enterprise con C# e .NET. Ho esperienza con Azure e database SQL Server.",
        name: 'Luca Verdi',
        img: 'https://i.pinimg.com/474x/7c/74/25/7c74250a24056d8b8f444fd62bdbff34.jpg'
    },
    {
        data: ['php', 'laravel', 'wordpress', 'mysql'],
        intro: "Sviluppo siti web dinamici con PHP e Laravel. Ho esperienza con WordPress e database MySQL.",
        name: 'Sofia Neri',
        img: 'https://i.pinimg.com/236x/08/ca/3b/08ca3b186948be29b160eda191f396f0.jpg'
    },
    {
        data: ['php', 'golang', 'rust', 'angularjs', 'mysql'],
        intro: "Sviluppoáda siti web dinamici con PHP e Laravel. Ho esperienza con WordPress e database MySQL.",
        name: 'Sofia Neari',
        img: 'https://i.pinimg.com/474x/c9/53/c8/c953c8edcad16670e40a5451be429f91.jpg'
    }
];
function Avatar({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                width: '100%',          // Chiều rộng 100% theo khung chứa
                height: '250px',            // Đặt chiều cao bằng 0 và dùng padding để tạo hình vuông
                objectFit: 'cover',     // Đảm bảo ảnh lấp đầy khung mà không bị méo
                borderRadius: '4px',    // Thêm bo góc nếu muốn
            }}
        />
    )
}


function Intro({ intro, name }) {
    const nameStyle = { fontWeight: 'bold', fontSize: '2em', fontFamily: 'monospace', wordWrap: 'break-word' }
    const introStyle = { fontWeight: 'bold', fontSize: '1em', fontFamily: 'monospace', wordWrap: 'break-word' }
    return <div style={{ padding: '10px 16px 10px' }}>
        <h2 style={nameStyle}>{name}</h2>
        <p style={introStyle}>{intro}</p>
    </div>
}
function SkillList({ skills }) {

    const colors = ['#e91e63', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b'];
    const style = {
        listStyle: 'none',
        padding: '10px',
        borderRadius: '6px',
        margin: '10px',
        color: '#ccc',
        fontFamily: 'monospace',
        fontWeight: 'bold'
    }

    const ulStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', // Đảm bảo bọc các phần tử khi màn hình nhỏ
        overflowX: 'hidden', // Thêm overflow-x: auto để tạo thanh cuộn ngang khi tràn
        padding: '0',
    }

    const liSkill = skills.map(v => <li key={v} style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)], ...style }}>{v}</li>)

    return (
        <ul style={ulStyle}>
            {liSkill}
        </ul>
    )
}

function App() {
    const cardStyle = {
        display: 'flex', // Use flexbox for responsive layout
        flexDirection: 'column', // Items stacked vertically
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically within card
        margin: '1rem', // Add spacing between cards
        padding: '1rem', // Add padding within cards
        background: '#f5f5f5', // Optional background color
        borderRadius: '5px', // Rounded corners for visual appeal
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        maxWidth: '300px', // Set a maximum width for responsive behavior
      };
    
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Map through userData and render cards */}
          {userData.map((value) => (
            <div key={value.name} className="card" style={cardStyle}>
              <Avatar alt={'avatar'} src={value.img} />
              <div className="data">
                <Intro intro={value.intro} name={value.name} />
                <SkillList skills={value.data} />
              </div>
            </div>
          ))}
        </div>
      );
    

}



export default App;
