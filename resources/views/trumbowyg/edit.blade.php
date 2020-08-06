@extends('layouts.adminlte')

@section('content')
<div class="container mt-3">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Edit Post</div>
                <form action="{{ route('trumbowyg.update', $post->id) }}" method="post">
                    @csrf
                    @method('put')
                    <div class="card-body">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" value="{{ $post->title }}" 
                            id="title" class="form-control @error('title') is-invalid @enderror">
                            @error('title')
                            <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="content">Content</label>
							<trunbowyg-component></trunbowyg-component>
                            @error('title')
                            <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save mr-1"></i> Update
                        </button>
                        <a href="{{ route('trumbowyg.index') }}" class="btn btn-default float-right">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection