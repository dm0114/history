import ReactDiffViewer from 'react-diff-viewer';

const Log = () => {
    const oldCode = '안녕';
    const newCode = '안녕하세요!';

    return (
        <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
    )
}

export default Log