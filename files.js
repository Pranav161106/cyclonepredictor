const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');
const fileList = document.getElementById('file-list');

fileInput.addEventListener('change', handleFiles);
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('hover');
});
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('hover');
});
dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('hover');
  const files = e.dataTransfer.files;
  handleFiles({ target: { files } });
});

function handleFiles(e) {
  const files = e.target.files;
  fileList.innerHTML = '';
  for (const file of files) {
    const listItem = document.createElement('div');
    listItem.textContent = `📄 ${file.name}`;
    fileList.appendChild(listItem);
  }
}
