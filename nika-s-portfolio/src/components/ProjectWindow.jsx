export default function ProjectWindow({ title, subTitle, description, image, address }) {
    return (
        <div id="projectWindowWrap">
            <div id="projectWindowHeaderWrap">
                <p className="littleTitles" id="projectHeader">{title}</p>
                <p className="littleTitles" id="projectSubHeader">{subTitle}</p>
            </div>
            <div id="projectWindowContentWrap">
                <img src={image} alt="Project" id="projectImage" />
            </div>
            <div id="projectWindowFooterWrap">
                <p className="littleTitles" id="projectSubHeader">{description}</p>
                <a href={address} target="_blank" rel="noopener noreferrer" id="viewButton">
                    <p className="secondaryHeaders" >
                        <span className="angleBrackets">&lt;</span>view<span className="angleBrackets">&gt;</span>
                    </p>
                </a>
            </div>
        </div>
    );
}