import React from "react";

function About(){
    return(
        <div className="articles-container">
            <div className="content-section" style={{textAlign: "left",}}>
            <h2  className="orangetext" style={{textAlign: "center",}}>Hội Hiệp Sĩ là gì thế?</h2>
        <p><a target="_blank" href="https://www.facebook.com/groups/HoiHiepSi" rel="noopener noreferrer">Hội Hiệp Sĩ</a>  là một group trên facebook được tạo ra vào ngày 2/4/2020 bởi các thành viên của group <a target="_blank" href="https://www.facebook.com/groups/ngontu/" rel="noopener noreferrer">Ngôn từ đâu mà có?</a> với một mục đích duy nhất:</p>
        <p>Bảo vệ content của các tác giả trong cộng đồng Chơi Chữ khỏi sự sử dụng không xin phép, ăn cắp trắng trợn, làm ngơ khi được nhắc nhở của những kẻ vô ý thức. 
            Nói hoa mỹ là vậy chứ thật ra là đi bóc phốt, vạch trần, chọc tiết, trêu đùa mấy đứa đạo tặc hay ăn cắp chất xám.</p>
        
        
        <h4 className="orangetext">Các trường hợp xử lí của nhóm:</h4>
        <p>Hội Hiệp Sĩ sẽ hỗ trợ tác giả đòi lại công bằng trong các trường hợp sau đây:</p>
        <ol>
            <li>Về bài ăn cắp:
                <ul>
                    <li>Không đề tên tác giả hoặc group nơi tác giả đăng</li>
                    <li>Có bằng chứng về thời gian tác giả đăng sớm hơn bài lấy cắp</li>
                    <li>Bài lấy cắp nổi hơn bài gốc hoặc có nhiều tương tác (trên 300)</li>
                </ul>
            </li>
            <li>Về tác phẩm bị ăn cắp:
                <ul>
                    <li>Là một ý tưởng nguyên gốc do chính tác giả sáng tác</li>
                    <li>Có nét riêng và không đại trà trong nguyên liệu</li>
                </ul>
            </li>
        </ol>

        <h4 className="orangetext">Phạm vi bảo trợ thường trực của nhóm:</h4>
        <p>Nhóm không bảo trợ tất cả các tác giả trên facebook, chỉ những tác giả yêu cầu sự bảo trợ của nhóm, 
            đáp ứng đủ tiêu chuẩn cộng đồng về sáng tác content, và được nhóm xét duyệt.</p>
        <ul>
            <li>Mọi tác giả trong nhóm Ngôn từ đâu mà có?</li>
            <li>Mọi tác giả trong nhóm Thìa đầy thơ</li>
            <li>Mọi tác giả trong Hội Hiệp Sĩ</li>
            <li>Mọi tác giả được đăng lên Trò Chơi Chữ</li>
            <li>Page Một tách ngôn từ</li>
            <li>Page Tờ Yên</li>
        </ul>
            </div>

        </div>
    );
}

export default About;