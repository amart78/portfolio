export const SkillCard = ( {title, imgURL}) => {
    return (
        <div className="skill-img">
            <img id="bouncing" src={imgURL} alt={title}/>
        </div>
    )
}